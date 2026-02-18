import React from 'react';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import './AabhaDhwani.css';

function AabhaDhwani() {
    return (
        <div className="premium-gradient-bg">
            {/* Hero Section */}
            <Section className="ad-hero">
                <Container>
                    <p className="page-eyebrow badge-eyebrow">Aabha & Dhwani Creative Studios</p>
                    <h1 className="page-title">Real Estate Branding.<br />Strategic Market Positioning.</h1>
                    <p className="page-subtitle">
                        Integrated branding, advertising, and marketing solutions aligned to real estate development positioning and project launch strategies.
                    </p>
                </Container>
            </Section>

            {/* Intro Section */}
            <Section className="ad-intro-section">
                <Container>
                    <div className="ad-intro-content">
                        <h2 className="section-title">Who We Are</h2>
                        <p className="text-body text-large">
                            Aabha & Dhwani Creative Studios serves as the strategic marketing and branding partner within the Helix Group ecosystem.
                            The studio delivers disciplined real estate marketing, project branding, and go-to-market execution aligned to the development lifecycle.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Services Section */}
            <Section>
                <Container>
                    <h2 className="section-title mb-xl text-center">Our Capabilities</h2>
                    <div className="ad-services-grid">
                        <div className="ad-service-card">
                            <h3>Brand Strategy & Identity</h3>
                            <p>Structured brand positioning, identity systems, and communication frameworks for real estate projects.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Digital Marketing & Social Media</h3>
                            <p>Disciplined digital campaigns and social media execution for real estate project visibility.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Advertising Campaign Management</h3>
                            <p>Coordinated ATL, BTL, and digital advertising aligned to development milestones.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Creative Content Production</h3>
                            <p>Project films, promotional content, and campaign storytelling for real estate marketing.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Marketing Analytics & Performance Governance</h3>
                            <p>Data-driven campaign monitoring and structured ROI improvement for development projects.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section className="ad-cta-section">
                <Container>
                    <div className="ad-cta-box">
                        <h2>Structured Marketing for Real Estate Development</h2>
                        <p>Disciplined branding and market positioning aligned to the development lifecycle.</p>
                        <Button to="/contact" variant="primary">Start a Strategic Discussion</Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default AabhaDhwani;
