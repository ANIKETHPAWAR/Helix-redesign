import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { MetricCard } from '../../components/common/Card/Card';
import './Helix360.css';

function Helix360() {
  return (
    <div className="premium-gradient-bg">
      <Section className="h360-header">
        <Container>
          <p className="page-eyebrow badge-eyebrow">Helix 360</p>
          <h1 className="page-title">Where Civil Contractors Stop,<br />Helix 360 Takes Over</h1>
          <p className="page-subtitle">
            Helix 360 completes the development lifecycle by executing post-plaster finishing works with integrated quality control and vendor coordination
          </p>
        </Container>
      </Section>

      <Section>
        <div className="h360-grid">
          {/* Main Content */}
          <div className="h360-content">
            <h2>Integrated Finishing Services</h2>
            <p className="text-body mb-xl">
              Projects often facing maximum cost leakage and quality dilution during the finishing stages.
              Helix 360 provides single-point accountability for high-quality execution.
            </p>

            <div className="services-grid">
              <div className="service-item">
                <h3>Painting & Surface Finishing</h3>
              </div>
              <div className="service-item">
                <h3>Flooring & Tiling Solutions</h3>
              </div>
              <div className="service-item">
                <h3>Sanitary & Bathroom Fittings</h3>
              </div>
              <div className="service-item">
                <h3>Electrical & Plumbing MEP Execution</h3>
              </div>
              <div className="service-item">
                <h3>Specialized Building Product Integration</h3>
              </div>
            </div>


          </div>

          {/* Sidebar */}
          <div className="h360-sidebar">
            <div className="sidebar-card">
              <h3>Execution at Scale</h3>
              <p>Market leading delivery metrics.</p>
              <div className="sidebar-metrics">
                <MetricCard number="4M+" label="sq ft Painted" className="compact-metric" />
                <MetricCard number="1M+" label="sq ft Flooring" className="compact-metric" />
                <MetricCard number="2K+" label="Bathrooms" className="compact-metric" />
                <MetricCard number="5K+" label="Units Wired" className="compact-metric" />
              </div>
            </div>

            <div className="sidebar-cta">
              <h3>Need finishing expertise?</h3>
              <p className="text-sm mb-md text-muted">Ensure your project finishes as strong as it started.</p>
              <Link to="/contact" className="sidebar-link">Consult Helix 360 &rarr;</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="cta-section-alt">
        <div className="cta-box-simple">
          <h2>Need a reliable finishing partner?</h2>
          <p>Let Helix 360 handle your post-plaster execution with proven expertise and accountability.</p>
          <Button to="/contact" variant="primary">Discuss your project</Button>
        </div>
      </Section>
    </div>
  );
}

export default Helix360;
