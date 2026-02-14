import React from 'react';
import { Link } from 'react-router-dom';
import {
  DraftingCompass,
  ClipboardList,
  TrendingUp,
  Activity,
  ShieldCheck,
  FileCheck,
  Building2,
  Key
} from 'lucide-react';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import './Infrastructure.css';

// Assets
import heroBg from '../../assets/I-1.jpg';
import infraImg from '../../assets/infra-1.png';
import consultImg from '../../assets/I-5.jpg';

function Infrastructure() {
  return (
    <div className="infra-page">
      {/* Hero Section */}
      <section className="infra-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="infra-hero-overlay"></div>
        <Container>
          <div className="infra-hero-content">
            <p className="page-eyebrow">Helix Infrastructure</p>
            <h1 className="page-title">From Concept to <br />Commercial Success</h1>
            <p className="page-subtitle">
              Helix Infrastructure Consultants delivers integrated development advisory, engineering, project management, and structured marketing solutions. We partner with landowners, developers, and investors to transform opportunities into profitable real estate assets.
            </p>
            <div className="hero-actions">
              <Button to="/contact" variant="primary">Partner With Us</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro / Value Prop Section (Zig) */}
      <Section className="infra-section">
        <Container>
          <div className="infra-grid-zigzag">
            <div className="infra-text-col">
              <h2>Real Estate Project Marketing & Sales</h2>
              <div className="highlight-box">
                <span className="highlight-number">10,000+</span>
                <span className="highlight-label">Homes sold across South India</span>
              </div>
              <p className="text-body">
                Helix Infrastructure combines deep engineering expertise with proven go-to-market capabilities. We don't just design projects—we ensure they succeed commercially through strategic marketing and sales execution.
              </p>
              <p className="text-body">
                Our approach integrates technical feasibility with market reality, ensuring that what is built is not only structurally sound but also commercially viable and desirable to the end-user.
              </p>
            </div>
            <div className="infra-img-col">
              <div className="image-wrapper glass-frame">
                <img src={infraImg} alt="Infrastructure Project" />
                <div className="floating-badge">
                  <span className="badge-icon">🏗️</span>
                  <span>End-to-End Execution</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lifecycle Section (Zag) */}
      <Section className="infra-section alt-bg">
        <Container>
          <div className="infra-grid-zigzag reverse">
            <div className="infra-text-col">
              <h2>Integrated Project Lifecycle</h2>
              <p className="text-body">
                We take ownership of the entire lifecycle. From the first sketch to the final handover, our team is embedded in every process to mitigate risk and maximize value.
              </p>

              <ul className="lifecycle-list">
                {[
                  { number: "01", text: "Engineering-led feasibility and design" },
                  { number: "02", text: "Project structuring and approvals" },
                  { number: "03", text: "Execution oversight and quality control" },
                  { number: "04", text: "Strategic marketing and sales execution" },
                  { number: "05", text: "Post-delivery support and handover" }
                ].map((step, idx) => (
                  <li key={idx} className="lifecycle-item">
                    <span className="step-number">{step.number}</span>
                    <span className="step-content">{step.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="infra-img-col">
              <div className="image-wrapper glass-frame">
                <img src={consultImg} alt="Consulting and Strategy" />
                <div className="floating-badge bottom-right">
                  <span className="badge-icon">📈</span>
                  <span>Market Leaders</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities Section */}
      <Section className="infra-section">
        <Container>
          <div className="capabilities-wrapper">
            <div className="capabilities-header text-center">
              <h2>Core Capabilities</h2>
              <p>Comprehensive solutions for complex infrastructure challenges.</p>
            </div>

            <div className="capabilities-grid">
              {[
                {
                  icon: <DraftingCompass />,
                  title: "Engineering Advisory",
                  desc: "Technical due diligence and structural feasibility analysis."
                },
                {
                  icon: <ClipboardList />,
                  title: "Project Management",
                  desc: "End-to-end timeline, cost, and resource optimization."
                },
                {
                  icon: <TrendingUp />,
                  title: "Sales & Marketing",
                  desc: "Strategic go-to-market planning and sales velocity execution."
                },
                {
                  icon: <Activity />,
                  title: "Execution Control",
                  desc: "On-site supervision ensuring adherence to design specifications."
                },
                {
                  icon: <ShieldCheck />,
                  title: "Quality Assurance",
                  desc: "Rigorous material testing and construction quality audits."
                },
                {
                  icon: <FileCheck />,
                  title: "Regulatory Approvals",
                  desc: "Navigating complex statutory clearances and compliance."
                },
                {
                  icon: <Building2 />,
                  title: "Asset Management",
                  desc: "Post-completion value enhancement and facility oversight."
                },
                {
                  icon: <Key />,
                  title: "Turnkey Solutions",
                  desc: "Design-build delivery contracts with single-point accountability."
                }
              ].map((cap, i) => (
                <div key={i} className="capability-card group">
                  <div className="cap-icon-wrapper">
                    {cap.icon}
                  </div>
                  <div className="cap-content">
                    <h3>{cap.title}</h3>
                    <p>{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="infra-cta">
        <Container>
          <div className="cta-content glass-panel">
            <h2>Ready to discuss your infrastructure project?</h2>
            <p>Let's explore how Helix Infrastructure can deliver your project from concept to commercial success.</p>
            <div className="cta-buttons">
              <Button to="/contact" variant="primary">Start a conversation</Button>
              <Link to="/contact" className="secondary-link">View Portfolio &rarr;</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Infrastructure;
