import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
)

const ThreadsIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/></svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)
import ReCAPTCHA from 'react-google-recaptcha'
import SEO from '../../components/common/SEO/SEO'
import Section from '../../components/common/Section/Section'
import Container from '../../components/common/Container/Container'
import Button from '../../components/common/Button/Button'
import './Contact.css'

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('') // 'success' | 'error'
  const [captchaToken, setCaptchaToken] = useState(null)
  const [captchaError, setCaptchaError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const captchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token)
    if (token) setCaptchaError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate name: at least 4 characters
    if (formData.name.trim().length < 4) {
      setStatus('Name must be at least 4 characters.')
      setStatusType('error')
      return
    }

    // Validate message: at least 10 characters
    if (formData.message.trim().length < 10) {
      setStatus('Please provide at least 10 characters in the project details.')
      setStatusType('error')
      return
    }

    // Validate phone: exactly 10 digits
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (phoneDigits.length !== 10) {
      setStatus('Please enter a valid 10-digit phone number.')
      setStatusType('error')
      return
    }

    // Validate email: must be a complete email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address (e.g. name@example.com).')
      setStatusType('error')
      return
    }

    // Validate captcha
    if (!captchaToken) {
      setCaptchaError('Please complete the CAPTCHA verification.')
      return
    }

    setIsSubmitting(true)
    setStatus('')
    setStatusType('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken })
      })

      const data = await res.json()

      if (data.success) {
        navigate('/thank-you')
        return
      } else {
        setStatus(data.error || 'Something went wrong. Please try again.')
        if (data.debug) setStatus(prev => prev + ' [DEBUG: ' + data.debug + ']')
        setStatusType('error')
      }
    } catch (err) {
      setStatus('Network error. Please check your connection and try again.')
      setStatusType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const phone = "918885028100" // Replace with real number
    const message = "Hello, I would like to discuss a real estate development project."
    const url = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener")
  }

  return (
    <div className="premium-gradient-bg">
      <SEO
        title="Contact Helix Group | Real Estate Consulting Inquiry"
        description="Get in touch with Helix Group for real estate development consulting, project management, and construction advisory services in Hyderabad, India."
        keywords="contact helix group, real estate consulting inquiry, construction project management contact, Hyderabad real estate consultants contact, B2B consulting inquiry"
        canonicalPath="/contact"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Helix Group",
            "description": "Get in touch with Helix Group for real estate development consulting services."
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Helix Group",
            "image": "https://helix-redesign.vercel.app/favicon.jpg",
            "url": "https://helix-redesign.vercel.app",
            "priceRange": "$$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No.101/109A, Phase 3, Saket Township, Kapra, ECIL Post",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500062",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.4725",
              "longitude": "78.5449"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business Inquiry",
              "availableLanguage": ["English", "Hindi", "Telugu"]
            }
          }
        ]}
      />
      <Section className="contact-header">
        <Container>

          <h1 className="page-title">Start a Structured Project Discussion</h1>
          <p className="page-subtitle">
            This form is intended for real estate development enquiries. Please share basic project details so our team can review and respond appropriately.
          </p>


        </Container>
      </Section>

      <Section className="contact-body">
        <div className="contact-grid">
          {/* Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3>Share Your Development Requirements</h3>
              <p className="form-intro">
                Provide your project details below. Our development team typically responds within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength="4"
                      title="Name must be at least 4 characters"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="organisation">Organisation</label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                      title="Please enter a valid email address (e.g. name@example.com)"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Helix Infrastructure Consultants Pvt Ltd">Helix Infrastructure Consultants Pvt Ltd</option>
                    <option value="Helix 360">Helix 360</option>
                    <option value="LaborPro">LaborPro</option>
                    <option value="Abha N Dhwani Creative Studios">Abha N Dhwani Creative Studios</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                    placeholder="Please describe your project scope, location, and timeline..."
                    title="Please provide at least 10 characters"
                  ></textarea>
                </div>

                <div className="captcha-wrapper">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                    theme="dark"
                  />
                  {captchaError && <span className="captcha-error">{captchaError}</span>}
                </div>

                <div className="form-actions">
                  <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : <>Submit Project Enquiry <ArrowUpRight size={18} /></>}
                  </Button>
                  {status && (
                    <span className={`submit-status ${statusType === 'error' ? 'error' : ''}`}>
                      {status}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="contact-info-col">
            <div className="info-card">
              <h3>Contact Information</h3>
              <p className="text-muted mb-lg">Direct lines to our development teams.</p>

              <div className="social-section" aria-labelledby="social-heading" style={{ marginTop: '0', paddingTop: '0', borderTop: 'none', marginBottom: 'var(--spacing-xl)' }}>
                <h4 id="social-heading">Follow us on</h4>

                <div className="social-groups">
                  {/* 1. Helix Infrastructure Consultants Pvt Ltd */}
                  <div className="social-group">
                    <div className="social-group-title">
                      <span>Helix Infrastructure Consultants Pvt Ltd</span>
                    </div>
                    <div className="social-icons-row">
                      <a href="https://www.linkedin.com/company/helix-infrastructure-consultants-p-ltd/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
                      <a href="https://www.facebook.com/HelixInfra" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook" title="Facebook"><FacebookIcon /></a>
                      <a href="https://www.instagram.com/helix_hyderabad/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram" title="Instagram"><InstagramIcon /></a>
                      <a href="https://www.threads.com/@helix_hyderabad?invite=0" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Threads" title="Threads"><ThreadsIcon /></a>
                      <a href="https://x.com/Helix_Infra" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X (Twitter)" title="X (Twitter)"><XIcon /></a>
                    </div>
                  </div>

                  {/* 2. Helix 360 */}
                  <div className="social-group">
                    <div className="social-group-title">
                      <span>Helix 360</span>
                    </div>
                    <div className="social-icons-row">
                      <a href="https://www.linkedin.com/company/helix-360-construction-services/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
                      <a href="https://www.facebook.com/profile.php?id=61575522209034" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook" title="Facebook"><FacebookIcon /></a>
                      <a href="https://www.instagram.com/hel.ix360" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram" title="Instagram"><InstagramIcon /></a>
                      <a href="https://www.threads.com/@hel.ix360" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Threads" title="Threads"><ThreadsIcon /></a>
                      <a href="https://x.com/Helix360S" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X (Twitter)" title="X (Twitter)"><XIcon /></a>
                    </div>
                  </div>

                  {/* 3. LaborPro */}
                  <div className="social-group">
                    <div className="social-group-title">
                      <span>LaborPro</span>
                    </div>
                    <div className="social-icons-row">
                      <a href="https://www.linkedin.com/company/helix-tech-labor-pro-india-llp/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
                      <a href="https://www.facebook.com/profile.php?id=61579118492180" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook" title="Facebook"><FacebookIcon /></a>
                      <a href="https://www.instagram.com/laborpro193/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram" title="Instagram"><InstagramIcon /></a>
                      <a href="https://www.threads.com/@laborpro193" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Threads" title="Threads"><ThreadsIcon /></a>
                      <a href="https://x.com/Laborpro193" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X (Twitter)" title="X (Twitter)"><XIcon /></a>
                    </div>
                  </div>

                  {/* 4. Aabha 'N' Dhwani */}
                  <div className="social-group">
                    <div className="social-group-title">
                      <span>Aabha 'N' Dhwani</span>
                    </div>
                    <div className="social-icons-row">
                      <a href="https://www.linkedin.com/company/and-creative-studios/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
                      <a href="https://www.facebook.com/ANDCreativeStudios" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook" title="Facebook"><FacebookIcon /></a>
                      <a href="https://www.instagram.com/aabha_and_dhwani_creative/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram" title="Instagram"><InstagramIcon /></a>
                      <a href="https://www.threads.com/@aabha_and_dhwani_creative" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Threads" title="Threads"><ThreadsIcon /></a>
                      <a href="https://x.com/AND_Creatives" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X (Twitter)" title="X (Twitter)"><XIcon /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <h4>HEAD OFFICE</h4>
                <p>
                  Helix Group<br />
                  Plot No.101/109A, Phase 3, Saket Township,<br />
                  Kapra, ECIL Post – Hyderabad,<br />
                  Telangana, INDIA – 500062
                </p>
              </div>

              <Button variant="primary" onClick={handleWhatsAppClick}>
                Chat on WhatsApp
              </Button>
            </div>


          </div>
        </div>
      </Section >
    </div >
  )
}

export default Contact
