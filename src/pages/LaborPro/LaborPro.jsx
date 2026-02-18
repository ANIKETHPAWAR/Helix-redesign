import React from 'react';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import './LaborPro.css';

function LaborPro() {
    return (
        <div className="premium-gradient-bg">
            {/* Header / Hero */}
            <Section className="labor-header">
                <Container>
                    <p className="page-eyebrow badge-eyebrow">LaborPro Integration</p>
                    <h1 className="page-title">Structured Workforce Deployment<br />for Real Estate.</h1>
                    <p className="page-subtitle">
                        LaborPro provides structured manpower deployment and operational coordination for real estate construction and development projects.
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
                                Helix deploys reliable, skilled, and governed workforce solutions to ensure real estate development sites operate without personnel bottlenecks.
                            </p>
                        </div>

                        <div className="labor-services-grid">
                            <div className="labor-service-card">
                                <h3>Construction Manpower Deployment</h3>
                                <p>Skilled and unskilled labour for real estate construction sites, governed for efficiency and safety.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Site Operations Coordination</h3>
                                <p>Structured workforce coordination for real estate development and construction operations.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Facility & Security Staffing</h3>
                                <p>Trained personnel for real estate facility maintenance, housekeeping, and site security.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Post-Construction Support Staff</h3>
                                <p>Coordinated staffing for handover operations, maintenance teams, and project closeout support.</p>
                            </div>
                        </div>
                    </div>

                    <div className="labor-cta-box">
                        <h2>Ready to structure your project workforce?</h2>
                        <p>Start a discussion about your real estate manpower requirements.</p>
                        <Button to="/contact" variant="primary">Start a Strategic Discussion</Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default LaborPro;
