import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, HardHat, TrendingUp, ArrowRight } from 'lucide-react';
import Container from '../common/Container/Container';
import MrHelix from '../common/MrHelix/MrHelix';
import './CoreServices.css';

const CoreServices = () => {
    const services = [
        {
            icon: <Ruler strokeWidth={1.5} size={40} />,
            title: "Development Advisory",
            description: "Structured land evaluation, feasibility analysis, project planning, and regulatory coordination for real estate.",
            link: "/contact"
        },
        {
            icon: <HardHat strokeWidth={1.5} size={40} />,
            title: "Engineering & PMC",
            description: "Governed architectural design, structural engineering, and coordinated project management consulting.",
            link: "/helix360"
        },
        {
            icon: <TrendingUp strokeWidth={1.5} size={40} />,
            title: "Project Marketing",
            description: "Disciplined branding, sales execution, and structured project marketing aligned to development milestones.",
            link: "/aabha-dhwani"
        }
    ];

    return (
        <section className="core-services-section">
            <Container>
                <div className="cs-header">
                    <div className="cs-header-text">
                        <span className="cs-eyebrow">Our Expertise</span>
                        <h2 className="cs-title">Core Services</h2>
                        <p className="cs-subtitle">
                            Helix integrates advisory and execution across the full real estate development lifecycle — from feasibility through market-ready delivery.
                        </p>
                    </div>
                    <div className="cs-header-mascot">
                        <MrHelix variant={2} size="xl" pattern="standalone" animate={true} />
                    </div>
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

                            <Link to={service.link} className="cs-card-footer">
                                <span>Learn more</span>
                                <ArrowRight className="cs-arrow" size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CoreServices;
