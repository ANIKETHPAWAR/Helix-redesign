import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO/SEO';
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
import infraImg from '../../assets/infra-1.jpg';
import consultImg from '../../assets/I-5.jpg';

function Infrastructure() {
  return (
    <div className="infra-page">
      <SEO
        title="Real Estate Development Advisory | Project Management Consultancy"
        description="Helix Infrastructure provides real estate development advisory, project management consultancy for construction, land development feasibility consulting, and real estate project structuring services."
        keywords="real estate development advisory, project management consultancy construction, real estate engineering consultants, land development feasibility consultants, real estate project structuring consultants"
        canonicalPath="/infrastructure"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Helix Infrastructure", path: "/infrastructure" }
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Helix Infrastructure - Development Advisory",
            "provider": { "@type": "Organization", "name": "Helix Group" },
            "description": "Real estate development advisory, project management consultancy, engineering governance, and project structuring services.",
            "areaServed": { "@type": "Country", "name": "India" },
            "serviceType": "Real Estate Development Advisory"
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does a real estate development consultant do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A real estate development consultant provides advisory services across the entire project lifecycle — from feasibility assessment and development structuring to engineering governance, project management, and go-to-market strategy. They help developers mitigate risk and deliver predictable outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "What is real estate project structuring?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Real estate project structuring involves designing the financial, legal, and operational framework for a development project. It includes land feasibility analysis, regulatory coordination, partnership structuring, and phased development planning to ensure commercial viability."
                }
              }
            ]
          }
        ]}
      />
      {/* Hero Section */}
      <section className="infra-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="infra-hero-overlay"></div>
        <Container>
          <div className="infra-hero-content">
            <p className="page-eyebrow badge-eyebrow">Helix Infrastructure</p>
            <h1 className="page-title">Structured Development. <br />Predictable Outcomes.</h1>
            <h3>Supporting the marketing of over 10,000 residential units across multiple developments.</h3>
            <br />
            <p className="page-subtitle">
              Helix Infrastructure integrates development structuring, engineering governance, project management consulting, and real estate project marketing into one governed framework — delivering predictable real estate outcomes for developers, landowners, and investors.
            </p>
            <div className="hero-actions">
              <Button to="/contact" variant="primary">
                Start a Strategic Discussion <ArrowUpRight size={18} />
              </Button>
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
                <img src={infraImg} alt="Real estate infrastructure project by Helix Group Hyderabad" loading="lazy" width="600" height="400" />
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
                <img src={consultImg} alt="Real estate consulting and development strategy by Helix Group" loading="lazy" width="600" height="400" />
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
              <Button to="/contact" variant="primary">
                Start a Strategic Discussion <ArrowUpRight size={18} />
              </Button>
              <Link to="/projects" className="secondary-link">View Portfolio &rarr;</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Infrastructure;
