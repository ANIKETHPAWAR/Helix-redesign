/**
 * Post-build script: Injects route-specific meta tags into static HTML files.
 *
 * Since this is an SPA, Google sees the same index.html for every route.
 * This script creates route-specific HTML files with pre-baked meta tags
 * so crawlers see the correct title/description/schema without JavaScript.
 *
 * Run after `vite build`: node scripts/generate-static-meta.js
 */

import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'

const DIST = 'dist'
const SITE_URL = 'https://hicpl.com'

const pages = [
  {
    path: '/infrastructure',
    title: 'Real Estate Development Advisory | Project Management Consultancy | Helix Group',
    description: 'Helix Infrastructure provides real estate development advisory, project management consultancy for construction, land development feasibility consulting, and real estate project structuring services.',
    keywords: 'real estate development advisory, project management consultancy construction, real estate engineering consultants, land development feasibility consultants, real estate project structuring consultants'
  },
  {
    path: '/helix360',
    title: 'Helix 360 | End-to-End Real Estate Finishing & MEP Execution India | Helix Group',
    description: 'Helix 360 delivers integrated post-plaster finishing and MEP execution for real estate projects — painting, flooring, sanitary fittings, and electrical works under one governed framework in India.',
    keywords: 'post plaster finishing contractors, MEP finishing services construction, flooring and sanitary execution contractors, integrated finishing construction services'
  },
  {
    path: '/laborpro',
    title: 'LaborPro | Construction Workforce Management Platform India | Helix Group',
    description: 'LaborPro by Helix Group — structured workforce management and operational deployment platform for construction, manufacturing, logistics, and workforce-intensive sectors in India.',
    keywords: 'construction manpower supply company, industrial workforce outsourcing India, facility management staffing services, project workforce management solutions'
  },
  {
    path: '/aabha-dhwani',
    title: 'Aabha & Dhwani Creative Studios | Real Estate Marketing & Branding India | Helix Group',
    description: 'Aabha & Dhwani Creative Studios by Helix Group — brand strategy, digital marketing, advertising campaigns, and strategic communication for organizations across industries in India.',
    keywords: 'branding and advertising agency India, digital marketing and social media agency, integrated marketing campaign agency, corporate branding consultants'
  },
  {
    path: '/projects',
    title: 'Real Estate Projects Portfolio | Completed Construction Projects India | Helix Group',
    description: "Explore Helix Group's portfolio of 18+ completed real estate development and construction projects across Hyderabad, India. Residential, commercial, and mixed-use developments.",
    keywords: 'real estate project portfolio India, completed construction projects Hyderabad, real estate development case studies, construction project management portfolio'
  },
  {
    path: '/about',
    title: 'About Helix Group | Real Estate Consulting Company Hyderabad | Helix Group',
    description: 'Learn about Helix Group — a leading B2B real estate development consulting and delivery organization in Hyderabad, India. Meet our team of engineering and project management experts.',
    keywords: 'about helix group, real estate consulting company Hyderabad, construction consulting team India, B2B real estate advisory firm'
  },
  {
    path: '/contact',
    title: 'Contact Helix Group | Real Estate Consulting Inquiry | Helix Group',
    description: 'Get in touch with Helix Group for real estate development consulting, project management, and construction advisory services in Hyderabad, India.',
    keywords: 'contact helix group, real estate consulting inquiry, construction project management contact, Hyderabad real estate consultants contact'
  }
]

const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf-8')

let generated = 0

for (const page of pages) {
  const canonical = `${SITE_URL}${page.path}`

  // Replace the default meta tags with page-specific ones
  let html = baseHtml
    .replace(
      /<title>.*?<\/title>/,
      `<title>${page.title}</title>`
    )
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${page.description}" />`
    )

  // Add canonical link and keywords before </head>
  const extraMeta = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="keywords" content="${page.keywords}" />`,
    `<meta property="og:title" content="${page.title}" />`,
    `<meta property="og:description" content="${page.description}" />`,
    `<meta property="og:url" content="${canonical}" />`
  ].join('\n  ')

  html = html.replace('</head>', `  ${extraMeta}\n</head>`)

  // Write to route directory (e.g., dist/infrastructure/index.html)
  const dir = join(DIST, page.path)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  generated++
}

console.log(`Generated ${generated} static HTML files with pre-baked meta tags.`)
