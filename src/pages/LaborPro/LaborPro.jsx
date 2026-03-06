import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import './LaborPro.css';
import LaborproLogo from '../../assets/Laborpro-logo.png';
import BrandLogo from '../../components/common/BrandLogo/BrandLogo';
function LaborPro() {
    return (
        <div className="premium-gradient-bg">
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
                        <h2>Structured Workforce Deployment for Real Estate</h2>
                        <p>LaborPro integrates manpower solutions into the Helix development lifecycle — ensuring governed, predictable site operations.</p>
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
