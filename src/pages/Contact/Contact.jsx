import { useState } from 'react'
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
    // TODO: Connect to backend API
    setStatus('Form submitted (frontend only). Connect this form to your backend endpoint to start receiving enquiries.')
  }

  const handleWhatsAppClick = () => {
    const phone = "918885028100"
    const message = "Hi Helix team, I'm reaching out via the website contact page."
    const url = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener")
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="page-eyebrow">Contact</p>
          <h1 className="page-title">Start a Business Conversation</h1>
          <p className="page-subtitle">
            Share your requirement and we'll get back with clarifications and next steps 
            for B2B infrastructure and real estate projects.
          </p>
          <div className="disclaimer-box">
            <p className="disclaimer-text">
              <strong>Note:</strong> Helix Group works exclusively on B2B projects and partnerships. 
              Retail or individual construction enquiries are not undertaken.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="section">
        <div className="container form-grid">
          {/* Form */}
          <section aria-label="Enquiry form" className="card">
            <p className="card-meta">Enquiry</p>
            <p className="card-title">Tell us about your B2B project.</p>
            <p className="text-muted">
              This form is protected by Google reCAPTCHA. Once connected to your backend, 
              submissions will be routed to the right team and acknowledged over email.
            </p>

            <form onSubmit={handleSubmit} className="mt-sm" noValidate>
              <div className="form-row-inline">
                <div className="form-field">
                  <label className="form-label" htmlFor="name">
                    Full name <span>*</span>
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="organisation">
                    Organisation
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="form-row-inline">
                <div className="form-field">
                  <label className="form-label" htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="phone">
                    Phone <span>*</span>
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                  <p className="form-helper">
                    Include country code if you are based outside India.
                  </p>
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="service">
                  Area of interest <span>*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="helix360">Helix 360</option>
                  <option value="both">Both Infrastructure & Helix 360</option>
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">
                  Brief about your requirement <span>*</span>
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share context such as project type, location, timelines and any available documentation."
                  rows="5"
                ></textarea>
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="form-field">
                <div className="form-note">
                  <p>
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </div>
              </div>

              <div className="form-footer">
                <button type="submit" className="btn btn-primary">
                  Submit enquiry
                </button>
                {status && (
                  <p className="form-status">{status}</p>
                )}
              </div>
            </form>
          </section>

          {/* Contact Details */}
          <aside aria-label="Contact details" className="card">
            <p className="card-meta">Contact</p>
            <p className="card-title">Where you can reach us.</p>
            <p className="text-muted">
              Prefer speaking directly? Call, email or start a WhatsApp conversation 
              with our team for faster coordination.
            </p>

            <div className="mt-sm">
              <p className="footer-contact-label">Phone</p>
              <p>+91 88850 28100</p>

              <p className="footer-contact-label mt-xs">Email</p>
              <p>info@hicpl.com</p>

              <p className="footer-contact-label mt-xs">Registered office</p>
              <p>
                Helix Group<br />
                Hyderabad, Telangana, India
              </p>

              <button
                type="button"
                className="btn btn-outline mt-sm"
                onClick={handleWhatsAppClick}
              >
                Chat on WhatsApp
              </button>
            </div>

            <div className="mt-md" aria-label="Map to Helix">
              <iframe
                title="Helix Group - Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.485497611648!2d78.486671!3d17.437462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE0LjkiTiA3OMKwMjknMTIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Contact
