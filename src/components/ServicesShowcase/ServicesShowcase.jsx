import React from 'react';
import './ServicesShowcase.css';
import Container from '../common/Container/Container';
import { TrendingUp, Compass, Megaphone, Hammer, Users } from 'lucide-react';

const ServicesShowcase = () => {
    const advisoryServices = [
        {
            title: "Development Advisory",
            description: "Structured feasibility, financial modelling, and project planning for real estate development.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Engineering & PMC",
            description: "Governed architectural design, structural engineering, and coordinated project management.",
            icon: <Compass size={24} />
        },
        {
            title: "Project Marketing",
            description: "Disciplined marketing and sales execution aligned to development lifecycle milestones.",
            icon: <Megaphone size={24} />
        }
    ];

    const executionServices = [
        {
            title: "Post-Plaster Execution – Helix 360",
            description: "Integrated finishing and MEP execution aligned to the real estate development lifecycle.",
            icon: <Hammer size={24} />
        },
        {
            title: "Manpower & Operations – LaborPro",
            description: "Structured workforce deployment for real estate construction and development sites.",
            icon: <Users size={24} />
        }
    ];

    return (
        <section className="services-showcase-section">
            <Container>
                <div className="ss-header">
                    <h2>Integrated Real Estate Lifecycle Services</h2>
                    <p>Helix delivers structured advisory and coordinated execution across every phase of real estate development.</p>
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
