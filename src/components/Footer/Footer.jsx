import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <p className="footer-brand-title">Helix Group</p>
            <p className="footer-text">
              B2B consulting and delivery organisation combining engineering, project management, 
              execution, and go-to-market capability under one accountable framework.
            </p>
          </div>
          <div>
            <p className="footer-heading">Company</p>
            <ul className="footer-list">
              <li><Link to="/about" className="footer-link">About Helix</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Services</p>
            <ul className="footer-list">
              <li><Link to="/infrastructure" className="footer-link">Infrastructure</Link></li>
              <li><Link to="/helix360" className="footer-link">Helix 360</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <div className="footer-contact-item">
              <p className="footer-contact-label">Phone</p>
              <p>+91 88850 28100</p>
            </div>
            <div className="footer-contact-item mt-xs">
              <p className="footer-contact-label">Email</p>
              <p>info@hicpl.com</p>
            </div>
            <div className="footer-contact-item mt-xs">
              <p className="footer-contact-label">Location</p>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} Helix Group. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>B2B Projects & Partnerships Only</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
