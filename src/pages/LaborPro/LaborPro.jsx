import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../../components/common/SEO/SEO';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import './LaborPro.css';
import LaborproLogo from '../../assets/Laborpro-logo.png';
import BrandLogo from '../../components/common/BrandLogo/BrandLogo';
function LaborPro() {
    return (
        <div className="premium-gradient-bg">
            <SEO
                title="LaborPro | Construction Workforce Management Platform India"
                description="LaborPro by Helix Group — structured workforce management and operational deployment platform for construction, manufacturing, logistics, and workforce-intensive sectors in India."
                keywords="construction manpower supply company, industrial workforce outsourcing India, facility management staffing services, project workforce management solutions, construction labor deployment platform"
                canonicalPath="/laborpro"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "LaborPro", path: "/laborpro" }
                ]}
                structuredData={[
                    {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "LaborPro",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web",
                        "description": "Structured workforce management and operational deployment platform for construction and workforce-intensive sectors.",
                        "url": "https://www.laborpro.co",
                        "offers": {
                            "@type": "Offer",
                            "description": "Contact for pricing"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is construction manpower supply?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Construction manpower supply involves the organized deployment of skilled and semi-skilled workers to construction sites. It covers sourcing, vetting, deploying, and managing workers for tasks like masonry, carpentry, electrical work, plumbing, and general labor — ensuring projects have the right workforce at the right time."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is industrial workforce outsourcing?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Industrial workforce outsourcing is the practice of engaging a third-party provider to supply and manage workers for industrial operations. This includes construction, manufacturing, logistics, and facility management — helping organizations scale workforce capacity without the overhead of direct recruitment and HR management."
                                }
                            }
                        ]
                    }
                ]}
            />
            {/* Header / Hero */}
            <Section className="labor-header">
                <Container>
                    <BrandLogo src={LaborproLogo} alt="LaborPro Logo" />
                    {/* <p className="page-eyebrow badge-eyebrow">LaborPro Integration</p> */}
                    <h1 className="page-title">Workforce Operations Platform</h1>
                    <p className="page-subtitle">
                        Structured workforce management and operational deployment across real estate, manufacturing, logistics, and other workforce-intensive sectors. Workforce bottlenecks cause unpredictable delays, safety risks, and cost escalations. LaborPro provides structured manpower deployment and operational coordination — integrated into the Helix Development Platform to ensure governed, predictable business operations.
                    </p>
                </Container>
            </Section>

            {/* Services Section */}
            <Section>
                <Container>
                    <div className="labor-content-grid">
                        <div className="labor-intro">
                            <h2>Workforce Deployment Systems</h2>
                            <p className="text-body">
                                Structured deployment of skilled and semi-skilled workforce across construction, industrial, logistics, and operational environments — governed through productivity monitoring, safety compliance, and disciplined workforce coordination.
                            </p>
                        </div>

                        <div className="labor-services-grid">
                            <div className="labor-service-card">
                                <h3>Operational Workforce Coordination</h3>
                                <p>Site-level and operational workforce coordination aligned with project schedules, manufacturing operations, logistics activities, and institutional environments requiring organized manpower deployment.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Site Operations Coordination</h3>
                                <p>Structured site-level coordination aligned to project milestones and the Helix execution framework.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3> Facility & Infrastructure Support Workforce</h3>
                                <p> Deployment of trained personnel supporting facility operations including maintenance support, housekeeping services, and governed security coordination across commercial, residential, industrial, and institutional environments.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Operational & Post-Delivery Support Teams</h3>
                                <p> Coordinated workforce deployment supporting operational continuity, maintenance activities, logistics operations, and post-completion support across multiple workforce-intensive sectors.</p>
                            </div>
                        </div>
                    </div>

                    <div className="labor-cta-box">
                        <h2>Structured Workforce Operations Platform</h2>
                        <p>LaborPro is a structured workforce deployment platform designed to support organizations across construction, manufacturing, logistics, infrastructure, and facility operations — enabling disciplined manpower management within complex operational environments.</p>
                        <Button variant="primary" onClick={() => { window.open("https://www.laborpro.co", "_blank") }}>
                            Visit LaborPro <ArrowUpRight size={18} />
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default LaborPro;
