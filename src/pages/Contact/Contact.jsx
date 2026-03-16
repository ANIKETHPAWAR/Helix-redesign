import { useState, useRef } from 'react'
import { ArrowUpRight, Linkedin, Facebook } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'
import Section from '../../components/common/Section/Section'
import Container from '../../components/common/Container/Container'
import Button from '../../components/common/Button/Button'
import './Contact.css'

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

function Contact() {
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
        setStatus('Thank you. Your message has been sent to our team.')
        setStatusType('success')
        setFormData({ name: '', organisation: '', email: '', phone: '', service: '', message: '' })
        setCaptchaToken(null)
        if (captchaRef.current) captchaRef.current.reset()
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
      <Section className="contact-header">
        <Container>

          <h1 className="page-title">Start a Structured Project Discussion</h1>
          <p className="page-subtitle">
            This form is intended for real estate development enquiries. Please share basic project details so our team can review and respond appropriately.
          </p>


        </Container>
      </Section>

      <Section>
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
                    placeholder="Please describe your project scope, location, and timeline..."
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
                  {/* LinkedIn */}
                  <div className="social-group">
                    <div className="social-group-title">
                      <div className="social-icon-wrapper">
                        <Linkedin size={18} aria-hidden="true" />
                      </div>
                      <span>LinkedIn</span>
                    </div>
                    <div className="social-links-list">
                      <a href="https://www.linkedin.com/company/helix-infrastructure-consultants-p-ltd/" target="_blank" rel="noopener noreferrer" className="social-link-item">Helix Infrastructure</a>
                      <a href="https://www.linkedin.com/company/helix-tech-labor-pro-india-llp/" target="_blank" rel="noopener noreferrer" className="social-link-item">Helix Tech Labor Pro India LLP</a>
                      <a href="https://www.linkedin.com/company/and-creative-studios/" target="_blank" rel="noopener noreferrer" className="social-link-item">AND Creative Studios</a>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="social-group">
                    <div className="social-group-title">
                      <div className="social-icon-wrapper">
                        <Facebook size={18} aria-hidden="true" />
                      </div>
                      <span>Facebook</span>
                    </div>
                    <div className="social-links-list">
                      <a href="https://www.facebook.com/profile.php?id=61579118492180" target="_blank" rel="noopener noreferrer" className="social-link-item">Labor Pro</a>
                      <a href="https://www.facebook.com/HelixInfra" target="_blank" rel="noopener noreferrer" className="social-link-item">Helix Infra</a>
                      <a href="https://www.facebook.com/ANDCreativeStudios" target="_blank" rel="noopener noreferrer" className="social-link-item">AND Creative Studios</a>
                    </div>
                  </div>

                  {/* Other Platforms */}
                  <div className="social-buttons-row">
                    <a href="https://x.com/Helix_Infra" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X (Twitter)" title="X (Twitter)">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    <a href="https://www.threads.com/@helix_hyderabad?invite=0" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Threads" title="Threads">


                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">

                        <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />

                      </svg>
                    </a>

                  </div>
                </div>
              </div>

              <div className="info-item">
                <h4>Office</h4>
                <p>
                  Helix Group<br />
                  Plot No.101/109A, Phase 3, Saket Township,<br />
                  Kapra, ECIL Post – Hyderabad,<br />
                  Telangana, INDIA – 500062
                </p>
              </div>
              <div className="map-embed mt-lg" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                  title="Helix Group Location"
                  src="https://maps.google.com/maps?q=Plot%20No.101%2F109A%2C%20Phase%203%2C%20Saket%20Township%2C%20Kapra%2C%20ECIL%20Post%20%E2%80%93%20Hyderabad%2C%20Telangana%2C%20INDIA%20%E2%80%93%20500062&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <Button variant="secondary" onClick={handleWhatsAppClick}>
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
