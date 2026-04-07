const { google } = require('googleapis');

module.exports = async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, organisation, email, phone, service, message, captchaToken } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ success: false, error: 'All required fields must be filled.' });
    }

    // Validate name: at least 4 characters
    if (name.trim().length < 4) {
        return res.status(400).json({ success: false, error: 'Name must be at least 4 characters.' });
    }

    // Validate message: at least 10 characters
    if (message.trim().length < 10) {
        return res.status(400).json({ success: false, error: 'Project details must be at least 10 characters.' });
    }

    // Validate phone: exactly 10 digits
    const phoneDigits = (phone || '').replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
        return res.status(400).json({ success: false, error: 'Please enter a valid 10-digit phone number.' });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
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
        // Sanitise the private key:
        // 1. Strip surrounding double-quotes (common copy-paste mistake in Vercel dashboard)
        // 2. Convert literal \n sequences to real newlines
        let privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
        privateKey = privateKey.replace(/^"|"$/g, '');   // strip wrapping quotes
        privateKey = privateKey.replace(/\\n/g, '\n');    // literal \n → real newline

        if (!privateKey || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SHEET_ID) {
            console.error('Missing env vars:', {
                hasPrivateKey: !!privateKey,
                hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                hasSheetId: !!process.env.GOOGLE_SHEET_ID,
            });
            return res.status(500).json({ success: false, error: 'Server configuration error. Please contact the admin.' });
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: privateKey,
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
        console.error('Google Sheets error:', err.message || err);
        return res.status(500).json({
            success: false,
            error: 'Failed to save your submission. Please try again later.',
            debug: err.message || String(err)
        });
    }
}
