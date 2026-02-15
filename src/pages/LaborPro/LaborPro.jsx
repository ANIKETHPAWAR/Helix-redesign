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
                    <h1 className="page-title">Streamlined Workforce.<br />Optimized Operations.</h1>
                    <p className="page-subtitle">
                        LaborPro simplifies manpower procurement and operational outsourcing through technology-driven workforce supply and project management solutions.
                    </p>
                </Container>
            </Section>

            {/* Services Section */}
            <Section>
                <Container>
                    <div className="labor-content-grid">
                        <div className="labor-intro">
                            <h2>Comprehensive Workforce Solutions</h2>
                            <p className="text-body">
                                We provide reliable, skilled, and managed workforce solutions to ensure your operations run smoothly without personnel bottlenecks.
                            </p>
                        </div>

                        <div className="labor-services-grid">
                            <div className="labor-service-card">
                                <h3>Construction Manpower Supply</h3>
                                <p>Skilled and unskilled labor for construction sites, managed for efficiency and safety.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Factory Operations Management</h3>
                                <p>End-to-end workforce management for manufacturing and assembly lines.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Facility & Security Staffing</h3>
                                <p>Trained personnel for facility maintenance, housekeeping, and security services.</p>
                            </div>
                            <div className="labor-service-card">
                                <h3>Fleet & Logistics Workforce</h3>
                                <p>Drivers, loaders, and logistics coordinators to keep your supply chain moving.</p>
                            </div>
                        </div>
                    </div>

                    <div className="labor-cta-box">
                        <h2>Ready to optimize your workforce?</h2>
                        <p>Get in touch to discuss your manpower requirements.</p>
                        <Button to="/contact" variant="primary">Contact LaborPro</Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default LaborPro;
