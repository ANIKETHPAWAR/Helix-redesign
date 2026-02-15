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
                    <h1 className="page-title">Creative Intelligence.<br />Strategic Growth.</h1>
                    <p className="page-subtitle">
                        Integrated branding, advertising, and digital marketing solutions designed to build powerful business and project identities.
                    </p>
                </Container>
            </Section>

            {/* Intro Section */}
            <Section className="ad-intro-section">
                <Container>
                    <div className="ad-intro-content">
                        <h2 className="section-title">Who We Are</h2>
                        <p className="text-body text-large">
                            Aabha & Dhwani Creative Studios is an independent full-service advertising and digital marketing agency.
                            The studio also serves as a strategic marketing partner to Helix Group and its development ecosystem.
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
                            <p>Creating strong brand positioning, identity systems, and communication frameworks.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Digital Marketing & Social Media</h3>
                            <p>Performance-driven digital campaigns and social media growth strategies.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Advertising Campaign Management</h3>
                            <p>Integrated ATL, BTL, and digital advertising solutions.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Creative Content Production</h3>
                            <p>Corporate films, promotional videos, and campaign storytelling content.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Marketing Analytics & Performance Optimisation</h3>
                            <p>Data-driven campaign monitoring and ROI improvement strategies.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section className="ad-cta-section">
                <Container>
                    <div className="ad-cta-box">
                        <h2>Let's Build Your Brand Growth Strategy</h2>
                        <p>Start Marketing Conversation</p>
                        <Button to="/contact" variant="primary">Work With Us</Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default AabhaDhwani;
