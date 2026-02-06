import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoHicpl from '../../assets/Logo-hicpl.jpeg';
import Container from '../common/Container/Container';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src={logoHicpl} alt="Helix Group" className="footer-logo" />
              <span className="footer-brand-title">Helix Group</span>
            </div>
            <p className="footer-mission">
              Consult. Design. Build. Deliver.<br />
              End-to-end accountability for infrastructure and real estate projects.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><Link to="/about" className="footer-link">About Helix</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><Link to="/infrastructure" className="footer-link">Infrastructure</Link></li>
              <li><Link to="/helix360" className="footer-link">Helix 360</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-label">Phone:</span>
              <a href="tel:+918885028100" className="footer-text-link">+91 88850 28100</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-label">Email:</span>
              <a href="mailto:info@hicpl.com" className="footer-text-link">info@hicpl.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-label">Location:</span>
              <span className="footer-text">Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Helix Group. All rights reserved.</p>
          <p className="disclaimer">Helix Group works exclusively on B2B projects and partnerships.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
