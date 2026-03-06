import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoHicpl from '../../assets/Logo-hicpl.png';
import Container from '../common/Container/Container';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div
              className="footer-brand"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ cursor: 'pointer' }}
              title="Back to Top"
            >
              <img src={logoHicpl} alt="Helix Group" className="footer-logo" />
              <span className="footer-brand-title">Helix Group</span>
            </div>
            <p className="footer-mission">
              Structured development. Governed engineering. Predictable delivery.<br />
              End-to-end accountability for real estate development projects.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
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
              <li><Link to="/laborpro" className="footer-link">LaborPro</Link></li>
              <li><Link to="/aabha-dhwani" className="footer-link">Aabha & Dhwani</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-label">Location:</span>
              <span className="footer-text">Helix Group
                Plot No.101/109A, Phase 3, Saket Township,
                Kapra, ECIL Post – Hyderabad,
                Telangana, INDIA – 500062</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Helix Group. All rights reserved.</p>
          <p className="disclaimer">Helix Group operates exclusively within structured real estate development.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
