import React from 'react';
import './ServicesShowcase.css';
import Container from '../common/Container/Container';
import { TrendingUp, Compass, Megaphone, Hammer, Users } from 'lucide-react';

const ServicesShowcase = () => {
    const advisoryServices = [
        {
            title: "Development Advisory",
            description: "Transform land and development ideas into profitable real estate projects.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Engineering & PMC",
            description: "End-to-end architectural, structural, and project management consulting.",
            icon: <Compass size={24} />
        },
        {
            title: "Project Marketing",
            description: "Structured marketing and sales strategies that drive measurable project absorption.",
            icon: <Megaphone size={24} />
        }
    ];

    const executionServices = [
        {
            title: "Post-Plaster Execution – Helix 360",
            description: "Integrated finishing, MEP, and interior execution solutions.",
            icon: <Hammer size={24} />
        },
        {
            title: "Manpower & Operations – LaborPro",
            description: "Technology-driven manpower supply and operational management solutions.",
            icon: <Users size={24} />
        }
    ];

    return (
        <section className="services-showcase-section">
            <Container>
                <div className="ss-header">
                    <h2>Comprehensive Real Estate Solutions</h2>
                    <p>From strategic advisory to on-ground execution, we deliver excellence at every stage.</p>
                </div>

                <div className="ss-grid-advisory">
                    {advisoryServices.map((service, index) => (
                        <div className="ss-card" key={index}>
                            <div className="ss-icon-box">
                                {service.icon}
                            </div>
                            <h3 className="ss-card-title">{service.title}</h3>
                            <p className="ss-card-desc">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="ss-grid-execution">
                    {executionServices.map((service, index) => (
                        <div className="ss-card" key={index}>
                            <div className="ss-icon-box">
                                {service.icon}
                            </div>
                            <h3 className="ss-card-title">{service.title}</h3>
                            <p className="ss-card-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesShowcase;
