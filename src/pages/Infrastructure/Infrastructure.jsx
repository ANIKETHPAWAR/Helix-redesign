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
import CoreServices from '../../components/CoreServices/CoreServices';

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
            <p className="page-eyebrow badge-eyebrow">Helix Infrastructure</p>
            <h1 className="page-title">Structured Development. <br />Predictable Outcomes.</h1>
            <p className="page-subtitle">
              Helix Infrastructure integrates development structuring, engineering governance, project management consulting, and project marketing into one governed framework — delivering predictable real estate outcomes for developers, landowners, and investors.
            </p>
            <div className="hero-actions">
              <Button to="/contact" variant="primary">Start a Strategic Discussion</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Services Section */}
      <CoreServices />

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
                Most developers treat marketing as an afterthought — disconnected from engineering timelines and construction progress. This misalignment leads to delayed absorption, holding cost overruns, and unpredictable revenue.
              </p>
              <p className="text-body">
                Helix integrates project marketing into the development lifecycle from structuring through delivery. Every project is governed for both technical soundness and commercial viability — ensuring predictable absorption aligned to construction milestones.
              </p>
            </div>
            <div className="infra-img-col">
              <div className="image-wrapper glass-frame">
                <img src={infraImg} alt="Infrastructure Project" />
                <div className="floating-badge">
                  <span className="badge-icon">🏗️</span>
                  <span>Coordinated Execution</span>
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
                Helix governs the entire development lifecycle. From the initial feasibility assessment to final handover, our team is embedded in every phase to mitigate risk and deliver predictable outcomes.
              </p>

              <ul className="lifecycle-list">
                {[
                  { number: "01", text: "Development structuring and feasibility governance" },
                  { number: "02", text: "Regulatory coordination and approval management" },
                  { number: "03", text: "Coordinated execution oversight and quality assurance" },
                  { number: "04", text: "Structured marketing and disciplined sales execution" },
                  { number: "05", text: "Governed handover and post-delivery coordination" }
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
                  <span>Governed Delivery</span>
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
              <p>Disciplined capabilities integrated across the real estate development lifecycle — from structuring through market-ready delivery.</p>
            </div>

            <div className="capabilities-grid">
              {[
                {
                  icon: <DraftingCompass />,
                  title: "Engineering Advisory",
                  desc: "Structured due diligence and feasibility governance for real estate."
                },
                {
                  icon: <ClipboardList />,
                  title: "Project Management",
                  desc: "Coordinated timeline, cost, and resource governance."
                },
                {
                  icon: <TrendingUp />,
                  title: "Sales & Marketing",
                  desc: "Disciplined project positioning and structured sales execution."
                },
                {
                  icon: <Activity />,
                  title: "Execution Control",
                  desc: "Governed on-site supervision ensuring adherence to design and quality standards."
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
                  desc: "Structured design-build delivery with single-point accountability."
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
            <h2>Structured Partnerships for Real Estate Development</h2>
            <p>Helix governs every engagement from feasibility through handover — delivering predictable outcomes across the development lifecycle.</p>
            <div className="cta-buttons">
              <Button to="/contact" variant="primary">Start a Strategic Discussion</Button>
              <Link to="/projects" className="secondary-link">View Portfolio &rarr;</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Infrastructure;
