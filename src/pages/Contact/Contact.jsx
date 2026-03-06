import { useState, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
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

          <div className="trust-disclaimer">
            <strong>Note:</strong> Helix Group operates exclusively within structured real estate development.
          </div>
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
