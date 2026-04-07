import { Link } from 'react-router-dom'
import SEO from '../../components/common/SEO/SEO'
import Section from '../../components/common/Section/Section'
import Container from '../../components/common/Container/Container'
import Button from '../../components/common/Button/Button'
import './ThankYou.css'

function ThankYou() {
  return (
    <div className="premium-gradient-bg">
      <SEO
        title="Thank You | Helix Group"
        description="Thank you for contacting Helix Group. Our team will review your enquiry and respond within 24 hours."
        canonicalPath="/thank-you"
      />
      <Section className="thankyou-section">
        <Container>
          <div className="thankyou-card">
            <div className="thankyou-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="64" height="64">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h1 className="thankyou-title">Thank You for Your Enquiry</h1>
            <p className="thankyou-text">
              Your project details have been successfully submitted. Our development team will review your requirements and get back to you within 24 hours.
            </p>
            <div className="thankyou-actions">
              <Link to="/">
                <Button variant="primary">Back to Home</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default ThankYou
