import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { FeatureCard } from '../../components/common/Card/Card';
import './Infrastructure.css';

function Infrastructure() {
  return (
    <>
      <Section className="infra-header">
        <Container>
          <p className="page-eyebrow">Helix Infrastructure</p>
          <h1 className="page-title">From Concept to Commercial Success</h1>
          <p className="page-subtitle">
            Engineering-led advisory, execution control, and large-scale real estate project marketing.
          </p>
        </Container>
      </Section>

      <Section>
        <div className="infra-grid">
          <div className="infra-content">
            <h2>Real Estate Project Marketing & Sales</h2>
            <p className="highlight-text">
              10,000+ homes sold across South India.
            </p>
            <p className="text-body">
              Helix Infrastructure combines deep engineering expertise with proven
              go-to-market capabilities. We don't just design projects—we ensure
              they succeed commercially through strategic marketing and sales execution.
            </p>

            <div className="lifecycle-visual">
              <h3>Integrated Project Lifecycle</h3>
              <ul className="lifecycle-steps">
                <li>
                  <span className="step-marker">01</span>
                  <span className="step-text">Engineering-led feasibility and design</span>
                </li>
                <li>
                  <span className="step-marker">02</span>
                  <span className="step-text">Project structuring and approvals</span>
                </li>
                <li>
                  <span className="step-marker">03</span>
                  <span className="step-text">Execution oversight and quality control</span>
                </li>
                <li>
                  <span className="step-marker">04</span>
                  <span className="step-text">Strategic marketing and sales execution</span>
                </li>
                <li>
                  <span className="step-marker">05</span>
                  <span className="step-text">Post-delivery support and handover</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="infra-sidebar">
            <div className="sidebar-card">
              <h3>Capabilities</h3>
              <p>End-to-End Project Delivery</p>
              <div className="tags-container">
                <span className="tag">Engineering Advisory</span>
                <span className="tag">Project Management</span>
                <span className="tag">Sales & Marketing</span>
                <span className="tag">Execution Control</span>
              </div>
            </div>

            <div className="sidebar-cta">
              <h3>Have a project in mind?</h3>
              <Link to="/contact" className="sidebar-link">Get in touch &rarr;</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="cta-section-alt">
        <div className="cta-box-simple">
          <h2>Ready to discuss your infrastructure project?</h2>
          <p>Let's explore how Helix Infrastructure can deliver your project from concept to commercial success.</p>
          <Button to="/contact" variant="primary">Start a conversation</Button>
        </div>
      </Section>
    </>
  );
}

export default Infrastructure;
