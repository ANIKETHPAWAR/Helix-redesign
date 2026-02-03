# Helix Group Website

A modern, scalable React application for Helix Group - a B2B consulting and delivery organisation combining engineering, project management, execution, and go-to-market capability under one accountable framework.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, React Router, and Vite
- **Responsive Design**: Mobile-first approach with modern CSS
- **Structured & Scalable**: Component-based architecture for easy maintenance and scaling
- **Content Management**: Easy-to-update content structure
- **Performance Optimized**: Fast loading with Vite build system

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Footer/         # Site footer component
│   ├── Header/         # Navigation header component
│   ├── Layout/         # Main layout wrapper
│   ├── ProofStatements/ # Metrics/proof statements component
│   └── WhatsAppFloat/  # WhatsApp floating button
├── pages/              # Page components
│   ├── About/          # About page
│   ├── Contact/        # Contact page with form
│   ├── Helix360/       # Helix 360 service page
│   ├── Home/           # Homepage
│   ├── Infrastructure/ # Infrastructure service page
│   └── Projects/       # Projects portfolio page
├── styles/             # Shared styles and utilities
│   └── utilities.css  # Utility classes
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Updates

### Homepage Content

- Edit `src/pages/Home/Home.jsx` for homepage content
- Update proof statements in `src/components/ProofStatements/ProofStatements.jsx`

### Service Pages

- Infrastructure: `src/pages/Infrastructure/Infrastructure.jsx`
- Helix 360: `src/pages/Helix360/Helix360.jsx`

### Contact Form

- Form component: `src/pages/Contact/Contact.jsx`
- Currently frontend-only; connect to backend API in `handleSubmit` function

## 🎨 Styling

- Global styles: `src/index.css`
- Component-specific styles: Each component has its own CSS file
- Utility classes: `src/styles/utilities.css`
- CSS Variables: Defined in `:root` in `index.css`

## 🔧 Configuration

### Vite Configuration

- Config file: `vite.config.js`
- Default port: 3000
- Auto-opens browser on dev server start

### Routing

- Routes defined in `src/App.jsx`
- Uses React Router v6

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: > 768px

## 🚀 Deployment

### Build and Deploy

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - Any static hosting service

### Environment Variables

For production, you may want to add:

- API endpoints for contact form
- reCAPTCHA site key
- Analytics tracking IDs

## 📄 License

Copyright © 2024 Helix Group. All rights reserved.

## 🤝 Support

For questions or support, contact:

- Email: info@hicpl.com
- Phone: +91 88850 28100
