# Quick Start Guide

## Installation & Running

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**
   The app will automatically open at `http://localhost:3000`

## Project Structure Overview

### Components (`src/components/`)

- **Header**: Navigation with mobile menu
- **Footer**: Site footer with links
- **Layout**: Main layout wrapper
- **ProofStatements**: Metrics display component
- **WhatsAppFloat**: Floating WhatsApp button

### Pages (`src/pages/`)

- **Home**: Main landing page with hero, failure points, and proof statements
- **Infrastructure**: Infrastructure services page
- **Helix360**: Helix 360 finishing services page
- **Contact**: Contact form with B2B disclaimer
- **About**: About page
- **Projects**: Projects portfolio page

## Key Features Implemented

✅ **Homepage Content** (from brief):

- Primary headline: "Consult. Design. Build. Deliver."
- Sub-headline about B2B organisation
- "Why Projects Fail" section with 4 bullet points
- Bridge line about closing the gap
- "One Framework. End-to-End Accountability" section
- Proof statements with metrics

✅ **Infrastructure Page**:

- "From Concept to Commercial Success" header
- "10,000+ homes sold across South India" highlight
- Engineering-led advisory content

✅ **Helix 360 Page**:

- "Where Civil Contractors Stop, Helix 360 Takes Over" header
- Post-plaster execution content
- Metrics display

✅ **Contact Page**:

- "Start a Business Conversation" title
- B2B disclaimer prominently displayed
- Contact form ready for backend integration

## Next Steps

1. **Backend Integration**: Connect contact form to your API endpoint
2. **reCAPTCHA**: Add Google reCAPTCHA site key in Contact page
3. **Content Updates**: Update project data in Projects page
4. **Images**: Add project images and assets
5. **Analytics**: Add tracking code if needed

## Building for Production

```bash
npm run build
```

Output will be in the `dist` folder, ready to deploy to any static hosting service.
