import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import './AabhaDhwani.css';
import ANDlogo from '../../assets/AND-logo.png';
import BrandLogo from '../../components/common/BrandLogo/BrandLogo';


function AabhaDhwani() {
    return (
        <div className="premium-gradient-bg">
            {/* Hero Section */}
            <Section className="ad-hero">
                <Container>
                    <BrandLogo src={ANDlogo} alt="Aabha & Dhwani Logo" />
                    {/* <p className="page-eyebrow badge-eyebrow">Aabha & Dhwani Creative Studios</p> */}
                    <h1 className="page-title">Brand Strategy. Market Positioning. <br />Strategic Communication.</h1>
                    <p className="page-subtitle">
                        Aabha & Dhwani Creative Studios supports organizations in building strong brand presence through disciplined creative strategy, marketing execution, and communication design.
                        The studio works across industries — helping organizations shape their brand identity, strengthen market visibility, and communicate with clarity in increasingly competitive environments.
                    </p>
                </Container>
            </Section>

            {/* Intro Section */}
            <Section className="ad-intro-section">
                <Container>
                    <div className="ad-intro-content">
                        <h2 className="section-title">Who We Are</h2>
                        <p className="text-body text-large">
                            Aabha & Dhwani Creative Studios is the strategic communication and marketing arm within the Helix Group ecosystem.
                            The studio combines brand strategy, creative development, advertising execution, and digital marketing to support organizations in building strong and consistent market presence.
                            While the studio has supported real estate development marketing initiatives within the Helix ecosystem, its services extend across industries including infrastructure, industrial businesses, professional services, and emerging enterprises.
                            Every campaign is designed around structured planning, disciplined execution, and measurable communication outcomes.
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
                            <p>Development of brand positioning, visual identity systems, and communication frameworks designed to help organizations build distinctive and consistent market presence.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Digital Marketing & Social Media</h3>
                            <p>Integrated digital marketing strategies including social media management, content planning, audience engagement, and brand visibility campaigns across digital platforms.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Advertising Campaign Management</h3>
                            <p>Planning and execution of multi-channel advertising campaigns across digital, print, and media platforms designed to strengthen brand awareness and market reach.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Creative Content Production</h3>
                            <p>Development of visual and narrative content including campaign creatives, marketing materials, corporate presentations, and brand storytelling assets.</p>
                        </div>

                        <div className="ad-service-card">
                            <h3>Marketing Analytics & Performance Governance</h3>
                            <p>Structured monitoring of campaign performance through marketing analytics, audience insights, and optimization strategies that improve communication effectiveness.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section className="ad-cta-section">
                <Container>
                    <div className="ad-cta-box">
                        <h2>Governed Marketing & Strategic Communication</h2>
                        <p>Aabha & Dhwani integrates brand strategy, creative development, advertising execution, and digital communication into a coordinated marketing framework designed to support organizations across diverse industries.
                            Every initiative is developed with clarity of message, disciplined campaign management, and measurable communication outcomes.</p>
                        <Button to="/contact" variant="primary">
                            Start a Strategic Discussion <ArrowUpRight size={18} />
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

export default AabhaDhwani;
