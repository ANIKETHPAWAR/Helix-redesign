import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Helix Group'
const SITE_URL = 'https://hicpl.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

function SEO({ title, description, keywords, canonicalPath, ogImage = DEFAULT_OG_IMAGE, ogType = 'website', structuredData, breadcrumbs, robots }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Consult. Design. Build. Deliver.`
  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : undefined

  // Support both single schema object and array of schemas
  const schemas = structuredData
    ? Array.isArray(structuredData) ? structuredData : [structuredData]
    : []

  // Auto-generate BreadcrumbList schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${SITE_URL}${crumb.path}`
      }))
    })
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEO
