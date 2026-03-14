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
                      <a href="https://www.facebook.com/HelixInfra" target="_blank" rel="noopener noreferrer" className="social-link-item">Helix Infra</a>
                      <a href="https://www.facebook.com/ANDCreativeStudios" target="_blank" rel="noopener noreferrer" className="social-link-item">AND Creative Studios</a>
                    </div>
                  </div>

                  {/* Other Platforms */}
                  <div className="social-buttons-row">
                    <a href="https://x.com/Helix_Infra" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X (Twitter)" title="X (Twitter)">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.threads.com/@helix_hyderabad?invite=0" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Threads" title="Threads">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.016 23.447c-.015 0-.03 0-.045 0-3.045 0-5.556-.816-7.464-2.427C2.41 19.247 1.343 16.666 1.343 13.29c0-2.316.634-4.322 1.884-5.964C4.685 5.412 6.784 4.3 9.492 4.015c.08-.008.163-.013.245-.015.352-.01.7-.015 1.05-.015.118 0 .235 0 .354.002.396.006.793.018 1.19.035 1.705.076 3.19.467 4.414 1.163 1.096.623 1.94 1.464 2.508 2.5a6.494 6.494 0 0 1 .808 3.22c.005.152.008.305.008.459v.333c0 2.221-.527 3.996-1.566 5.275-1.002 1.233-2.33 1.854-3.95 1.854-.42 0-.84-.046-1.248-.135-.852-.187-1.571-.624-2.138-1.302-.276.327-.589.608-.931.839C9.563 22.023 8.65 22.4 7.55 22.4c-1.424 0-2.583-.49-3.448-1.458-.813-.91-1.226-2.148-1.226-3.678 0-1.879.79-3.415 2.35-4.566 1.32-.973 3.036-1.527 5.097-1.649.255-.014.512-.023.772-.027V10.15c0-.993-.243-1.748-.72-2.246-.532-.555-1.298-.834-2.274-.834-.658 0-1.332.128-2.002.379-.699.263-1.245.626-1.623 1.082l-1.378-1.696c.645-.732 1.488-1.29 2.506-1.657 1.033-.374 2.062-.562 3.061-.562 1.547 0 2.825.437 3.795 1.298.927.824 1.396 2.049 1.396 3.64v3.54c0 1.299.1 2.215.302 2.723.18.455.511.685.986.685.975 0 1.77-.384 2.364-1.144.604-.774.912-2.035.912-3.75v-.31c0-.13-.002-.26-.006-.39a4.876 4.876 0 0 0-.61-2.43 5.435 5.435 0 0 0-1.89-1.889c-.931-.532-2.068-.838-3.376-1.002-.345-.043-.69-.074-1.037-.087a31.427 31.427 0 0 0-2.073-.047c-.313 0-.625.005-.935.013-.069.002-.138.006-.208.012-2.222.234-3.957 1.15-5.158 2.718-1.026 1.341-1.546 2.996-1.546 4.92 0 2.835.882 4.985 2.624 6.391 1.637 1.321 3.792 1.99 6.401 1.99.013 0 .026 0 .038 0 1.714 0 3.32-.239 4.777-.71l-.64-2.181a13.333 13.333 0 0 1-3.956.611Zm-1.542-6.521c-.027.001-.055.002-.084.002-1.353.053-2.456.402-3.264 1.032-.715.556-1.076 1.34-1.076 2.332 0 .97.262 1.717.778 2.218.494.48 1.159.723 1.977.723.821 0 1.543-.275 2.144-.816.593-.535.895-1.282.895-2.221v-3.2c-.086.002-.172.004-.258.006-.372.01-.741.018-1.112.024Z"/>
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
      </Section>
    </div>
  )
}

export default Contact
