import { useState } from 'react'
import Section from '../../components/common/Section/Section'
import Container from '../../components/common/Container/Container'
import Button from '../../components/common/Button/Button'
import './Contact.css'

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend simulation
    setStatus('Thank you. Your message has been sent to our team.')
  }

  const handleWhatsAppClick = () => {
    const phone = "918885028100" // Replace with real number
    const message = "Hi Helix team, I'm reaching out via the website contact page."
    const url = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener")
  }

  return (
    <>
      <Section className="contact-header">
        <Container>
          <p className="page-eyebrow">Contact</p>
          <h1 className="page-title">Start a Business Conversation</h1>
          <p className="page-subtitle">
            Share your requirement and we'll get back with clarifications and next steps
            for B2B infrastructure and real estate projects.
          </p>

          <div className="trust-disclaimer">
            <strong>Note:</strong> Helix Group works exclusively on B2B projects and partnerships.
          </div>
        </Container>
      </Section>

      <Section>
        <div className="contact-grid">
          {/* Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3>Tell us about your project</h3>
              <p className="form-intro">
                Fill out the details below. Our engineering team typically responds within 24 hours.
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
                    <option value="">Select a service...</option>
                    <option value="infrastructure">Infrastructure Delivery</option>
                    <option value="helix360">Helix 360 Finishing</option>
                    <option value="consulting">Strategic Consulting</option>
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

                <div className="form-actions">
                  <Button type="submit" variant="primary">Submit Enquiry</Button>
                  {status && <span className="submit-status">{status}</span>}
                </div>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="contact-info-col">
            <div className="info-card">
              <h3>Contact Information</h3>
              <p className="text-muted mb-lg">Direct lines to our execution teams.</p>

              <div className="info-item">
                <h4>Phone</h4>
                <p>+91 88850 28100</p>
              </div>
              <div className="info-item">
                <h4>Email</h4>
                <p>info@hicpl.com</p>
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
    </>
  )
}

export default Contact
