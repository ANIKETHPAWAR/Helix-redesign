import React, { useState } from 'react';
import './IntegratedApproach.css';
import Container from '../common/Container/Container';
import Button from '../common/Button/Button';

// Import images
import imgConsult from '../../assets/c-1.jpg';
import imgDesign from '../../assets/a-2.jpg';
import imgBuild from '../../assets/c-3.jpg';
import imgDeliver from '../../assets/v-1.jpg';
import consult from '../../assets/consult.png';
const steps = [
    {
        id: 'consult',
        label: 'Consult',
        title: 'Consult',
        subtitle: 'Development Structuring',
        description: 'Helix begins every engagement with feasibility analysis, financial modelling, and regulatory planning to establish commercial viability before commitment.',
        image: consult,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.308C19.3961 16.7115 18.3513 17.8967 17.0632 18.7499C15.775 19.6031 14.2865 20.0966 12.7394 20.1833C11.1923 20.2701 9.63846 19.9472 8.22556 19.2454C6.81267 18.5437 5.58792 17.4862 4.6669 16.1738C3.74588 14.8615 3.15939 13.3377 2.96256 11.7471C2.76572 10.1566 2.96502 8.55225 3.54149 7.08658C4.11796 5.62091 5.05268 4.34213 6.25752 3.37133C7.46236 2.40053 8.89802 1.76993 10.43 1.54M10 2L12 2M10 22L12 22M22 12H20M4.13 19.13L5.55 17.71M19.87 4.13L18.45 5.55M4.13 4.87L5.55 6.29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 'design',
        label: 'Design',
        title: 'Design',
        subtitle: 'Engineering & Governance',
        description: 'Helix integrates technical design with governance frameworks, ensuring compliance, execution readiness, and structural integrity before ground is broken.',
        image: imgDesign,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 2L9.586 9.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13Z" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'build',
        label: 'Build',
        title: 'Build',
        subtitle: 'Coordinated Execution',
        description: 'Helix delivers on-site project management with quality assurance protocols, timeline governance, and stakeholder coordination through structured delivery.',
        image: imgBuild,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 'deliver',
        label: 'Deliver',
        title: 'Deliver',
        subtitle: 'Market-Ready Delivery',
        description: 'Helix coordinates finishing, handover protocols, and integrated marketing execution to ensure every project reaches commercial launch on schedule.',
        image: imgDeliver,
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

const IntegratedApproach = () => {
    const [activeStep, setActiveStep] = useState(0);
    const current = steps[activeStep];

    const handleNext = () => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    };

    const handlePrev = () => {
        setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    return (
        <section className="integrated-approach-section">
            <Container>
                <div className="ia-header text-center">
                    <h2 className="section-title">The Helix Development Framework</h2>
                    <p className="section-desc">
                        Four structured phases that govern every Helix engagement from opportunity assessment to market-ready delivery.
                    </p>
                </div>

                {/* Top Navigation Tabs */}
                <div className="ia-tabs-container">
                    <div className="ia-tabs">
                        {steps.map((step, index) => (
                            <button
                                key={step.id}
                                className={`ia-tab ${index === activeStep ? 'active' : ''}`}
                                onClick={() => setActiveStep(index)}
                            >
                                {step.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="ia-content-grid">
                    {/* Left: Image Card */}
                    <div className="ia-image-card">
                        <div
                            className="ia-image-bg"
                            style={{ backgroundImage: `url(${current.image})` }}
                        />
                        <div className="ia-image-overlay">
                            <div className="ia-image-label">
                                <span className="ia-icon-box">{current.icon}</span>
                                <span className="ia-label-text">{current.label}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="ia-text-content">
                        <div className="ia-step-counter">
                            Step <span className="highlight-step">{activeStep + 1}</span> of {steps.length}
                        </div>

                        <h3 className="ia-title">{current.title}</h3>
                        <h4 className="ia-subtitle">{current.subtitle}</h4>

                        <p className="ia-description">
                            {current.description}
                        </p>

                        <a href="#" className="ia-learn-more">
                            Learn More
                            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        {/* Bottom Controls */}
                        <div className="ia-controls">
                            <div className="ia-dots">
                                {steps.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`ia-dot ${idx === activeStep ? 'active' : ''}`}
                                        onClick={() => setActiveStep(idx)}
                                    />
                                ))}
                            </div>
                            <div className="ia-arrows">
                                <button className="ia-arrow-btn" onClick={handlePrev} aria-label="Previous step">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="ia-arrow-btn" onClick={handleNext} aria-label="Next step">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default IntegratedApproach;
