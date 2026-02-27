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
                    <h1 className="page-title">Structured Workforce Deployment<br />for Real Estate.</h1>
                    <p className="page-subtitle">
                        Workforce bottlenecks cause unpredictable delays, safety risks, and cost escalations on real estate sites. LaborPro provides structured manpower deployment and operational coordination — integrated into the Helix Development Framework to ensure governed, predictable site operations.
                    </p>
                </Container>
            </Section>

            {/* Services Section */}
            <Section>
                <Container>
                    <div className="labor-content-grid">
                        <div className="labor-intro">
                            <h2>Disciplined Workforce Solutions</h2>
                            <p className="text-body">
                                Most developers manage labour through informal networks — leading to inconsistent quality, compliance gaps, and unpredictable site productivity. LaborPro integrates workforce deployment into Phase 3 (Coordinated Execution) of the Helix Development Framework, ensuring every site operates with governed, reliable manpower.
                            </p>
                        </div>

                        <div className="labor-services-grid">
                            <div className="labor-service-card">
                                <h3>Construction Manpower Deployment</h3>
                                <p>Skilled and unskilled labour for real estate construction sites — governed for productivity, safety compliance, and schedule adherence.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Site Operations Coordination</h3>
                                <p>Structured site-level coordination aligned to project milestones and the Helix execution framework.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Facility & Security Staffing</h3>
                                <p>Trained personnel for real estate facility management, housekeeping, and governed site security operations.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Post-Construction Support Staff</h3>
                                <p>Coordinated staffing for governed handover operations, maintenance teams, and post-delivery support.</p>
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
