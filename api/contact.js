import { google } from 'googleapis';

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, organisation, email, phone, service, message, captchaToken } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
        return res.status(400).json({ success: false, error: 'Name, email, and phone are required.' });
    }

    if (!captchaToken) {
        return res.status(400).json({ success: false, error: 'Please complete the CAPTCHA.' });
    }

    // ── Verify reCAPTCHA token server-side ──
    try {
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
        const captchaRes = await fetch(verifyUrl, { method: 'POST' });
        const captchaData = await captchaRes.json();

        if (!captchaData.success) {
            return res.status(400).json({ success: false, error: 'CAPTCHA verification failed. Please try again.' });
        }
    } catch (err) {
        console.error('reCAPTCHA verification error:', err);
        return res.status(500).json({ success: false, error: 'CAPTCHA verification error.' });
    }

    // ── Append row to Google Sheet ──
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const timestamp = new Date().toISOString();

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:G',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[timestamp, name, organisation || '', email, phone, service || '', message || '']],
            },
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Google Sheets error:', err);
        return res.status(500).json({ success: false, error: 'Failed to save your submission. Please try again later.' });
    }
}
