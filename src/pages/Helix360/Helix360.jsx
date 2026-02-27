import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { MetricCard } from '../../components/common/Card/Card';
import './Helix360.css';
import Helix360Logo from '../../assets/Helix-360-logo.png';
import BrandLogo from '../../components/common/BrandLogo/BrandLogo';


function Helix360() {
  return (
    <div className="premium-gradient-bg">
      <Section className="h360-header">
        <Container>
          <BrandLogo src={Helix360Logo} alt="Helix 360 Logo" />
          {/* <p className="page-eyebrow badge-eyebrow">Helix 360</p> */}
          <h1 className="page-title">Where Civil Contractors Stop,<br />Helix 360 Takes Over</h1>
          <p className="page-subtitle">
            The finishing stage is where most real estate projects lose control — cost leakage, quality dilution, and timeline overruns. Helix 360 delivers integrated post-plaster finishing and MEP execution, governed by structured quality control and coordinated vendor management within the development lifecycle.
          </p>
        </Container>
      </Section>

      <Section>
        <div className="h360-grid">
          {/* Main Content */}
          <div className="h360-content">
            <h2>Integrated Finishing Services</h2>
            <p className="text-body mb-xl">
              Developers routinely lose 15–20% of project budgets during post-plaster stages due to fragmented vendor coordination and absent quality governance. Helix 360 provides single-point accountability — integrating finishing, MEP, and vendor management into one governed execution framework aligned to Phase 4 of the Helix Development Lifecycle.
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
              <p>Governed finishing execution across residential and mixed-use developments.</p>
              <div className="sidebar-metrics">
                <MetricCard number="4M+" label="sq ft Painted" className="compact-metric" />
                <MetricCard number="1M+" label="sq ft Flooring" className="compact-metric" />
                <MetricCard number="2K+" label="Bathrooms" className="compact-metric" />
                <MetricCard number="5K+" label="Units Wired" className="compact-metric" />
              </div>
            </div>

            <div className="sidebar-cta">
              <h3>Integrate Finishing into Your Lifecycle</h3>
              <p className="text-sm mb-md text-muted">Helix 360 connects directly to the Helix Development Framework — ensuring your project's finishing phase is governed with the same discipline as structuring and engineering.</p>
              <Link to="/contact" className="sidebar-link">
                Start a Strategic Discussion <ArrowUpRight size={18} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="cta-section-alt">
        <div className="cta-box-simple">
          <h2>Structured Finishing Execution for Real Estate</h2>
          <p>Helix 360 delivers governed post-plaster execution — coordinated, accountable, and integrated into the development lifecycle.</p>
          <Button to="/contact" variant="primary">
            Start a Strategic Discussion <ArrowUpRight size={18} />
          </Button>
        </div>
      </Section>
    </div>
  );
}

export default Helix360;
