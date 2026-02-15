import React from 'react';
import { Ruler, HardHat, TrendingUp, ArrowRight } from 'lucide-react';
import Container from '../common/Container/Container';
import './CoreServices.css';

const CoreServices = () => {
    const services = [
        {
            icon: <Ruler strokeWidth={1.5} size={40} />,
            title: "Development Advisory",
            description: "Expert land evaluation, feasibility analysis, project structuring, and strategic investment planning."
        },
        {
            icon: <HardHat strokeWidth={1.5} size={40} />,
            title: "Engineering & PMC",
            description: "Holistic architectural design, structural engineering, and end-to-end project management."
        },
        {
            icon: <TrendingUp strokeWidth={1.5} size={40} />,
            title: "Project Marketing",
            description: "Market-driven branding, sales velocity strategies, and structured project marketing execution."
        }
    ];

    return (
        <section className="core-services-section">
            <Container>
                <div className="cs-header">
                    <span className="cs-eyebrow">Our Expertise</span>
                    <h2 className="cs-title">Core Services</h2>
                    <p className="cs-subtitle">
                        Delivering integrated solutions from concept to commercial success.
                    </p>
                </div>

                <div className="cs-grid">
                    {services.map((service, index) => (
                        <div key={index} className="cs-card">
                            <div className="cs-icon-wrapper">
                                {service.icon}
                            </div>

                            <div className="cs-content">
                                <h3 className="cs-card-title">{service.title}</h3>
                                <p className="cs-card-desc">{service.description}</p>
                            </div>

                            <div className="cs-card-footer">
                                <span>Learn more</span>
                                <ArrowRight className="cs-arrow" size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CoreServices;
