# Helix Infrastructure Consultants – Static Website

Modern, responsive marketing website for **Helix Infrastructure Consultants Pvt. Ltd.** built as a static HTML/CSS/JS front-end, designed to be easy to migrate to a React / MERN stack later.

## Structure

```text
/helix-website
├── index.html                         # Home
├── about.html                         # About Helix
├── projects.html                      # Projects / Portfolio
├── contact.html                       # Contact & enquiry
├── services/
│   ├── civil-engineering.html         # Civil Engineering & Construction
│   ├── real-estate-consulting.html    # Real Estate Consulting
│   ├── project-management.html        # Project Management & Turnkey
│   └── builders-development.html      # Builders & Property Development
└── assets/
    ├── css/
    │   └── styles.css                 # Global design system & layout
    ├── js/
    │   └── main.js                    # Nav, WhatsApp, form front-end hooks
    ├── images/                        # (optional) Brand / project imagery
    └── fonts/                         # (optional) Custom web fonts
```

## Features

- **9-page structure** (Home, About, Projects, Contact, 4× Service pages).
- **Reusable header/footer** across all pages.
- **Mobile-first responsive layout** with a centralised design system in `styles.css`.
- **WhatsApp click-to-chat** floating action and inline buttons (`wa.me` links controlled via `data-` attributes).
- **Contact form** prepared for backend integration:
  - Semantic form fields.
  - Google reCAPTCHA `<script>` and widget placeholder.
  - Client-side JS stub in `main.js` where actual form submission logic can be added.
- **Google Maps embed** on `contact.html`.
- **SEO basics**:
  - Semantic HTML5 sections and headings.
  - Per-page `<title>` and `<meta name="description">`.
  - Clean, SEO-friendly URLs (one file per route).

## Running Locally

No build step is required.

1. Open the `helix-website` folder in your editor.
2. Use any static server, for example:
   - VS Code / Cursor Live Server extension, or
   - `npx serve helix-website` (from the parent directory).
3. Navigate to `http://localhost:3000` (or the port used by your server) and open `index.html`.

You can also open `index.html` directly in a browser, though some browsers may block remote scripts like Google Maps / reCAPTCHA when loaded from the `file://` protocol.

## Production Configuration

Before going live, update the following placeholders:

- **reCAPTCHA**:
  - In `contact.html`, replace `YOUR_RECAPTCHA_SITE_KEY` with your real site key.
  - Connect form submission to your backend (Node/Express, etc.) and verify reCAPTCHA server-side.
- **Google Maps**:
  - Update the `iframe` `src` in `contact.html` with the precise Helix office coordinates or a generated embed link.
- **WhatsApp**:
  - Confirm the phone number used in `data-whatsapp-phone` attributes on all pages.
  - Optionally customise the default `data-whatsapp-message` text per context.

## Future React / MERN Migration Notes

The codebase is intentionally structured to be migration-friendly:

- Each major visual area is a clear candidate for a React component:
  - Header (`<header.site-header>`), Footer (`<footer.site-footer>`), Hero, CTA band, service cards, project cards, contact form, etc.
- CSS is organised around **semantic, reusable classes** that can be:
  - Ported to CSS Modules, styled-components, or Tailwind (as utility equivalents).
- `main.js` is kept **small and DOM-agnostic**, so logic can move to:
  - React hooks (e.g., `useNav`, `useWhatsAppChat`, `useContactForm`).
- Routing in a future React app can mirror the existing URL shape:
  - `/`, `/about`, `/projects`, `/contact`, `/services/...`.

## Security & Best Practices

- All enquiry forms are intended to be protected with **Google reCAPTCHA** and processed on a **secure backend**:
  - This repository only implements the front-end hooks; no data is actually sent anywhere yet.
- When integrating a backend:
  - Always validate and sanitise inputs server-side.
  - Rate-limit form submissions and protect against CSRF/XSS.
  - Serve the site over HTTPS in production.
