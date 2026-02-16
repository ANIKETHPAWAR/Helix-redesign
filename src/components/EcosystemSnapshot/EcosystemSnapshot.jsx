import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../common/Section/Section'
import Container from '../common/Container/Container'
import { Building, Hammer, Users, Lightbulb, ArrowUpRight } from 'lucide-react'
import './EcosystemSnapshot.css'

function EcosystemSnapshot() {
    const ecosystems = [
        {
            id: 1,
            title: "Helix Infrastructure Consultants",
            description: "Engineering, development advisory, real estate marketing, and project execution consulting.",
            icon: <Building className="eco-icon" strokeWidth={1.5} />,
            path: "/infrastructure"
        },
        {
            id: 2,
            title: "Helix 360",
            description: "Integrated finishing, MEP, and specialized building product execution.",
            icon: <Hammer className="eco-icon" strokeWidth={1.5} />,
            path: "/helix360"
        },
        {
            id: 3,
            title: "LaborPro",
            description: "Technology-driven manpower supply and operational outsourcing platform.",
            icon: <Users className="eco-icon" strokeWidth={1.5} />,
            path: "/laborpro"
        },
        {
            id: 4,
            title: "Aabha & Dhwani Creative Studios",
            description: "Strategic branding, advertising, and digital marketing solutions.",
            icon: <Lightbulb className="eco-icon" strokeWidth={1.5} />,
            path: "/aabha-dhwani"
        }
    ]

    return (
        <Section className="ecosystem-section">
            <Container>
                <div className="ecosystem-header">
                    <h2 className="ecosystem-title">Ecosystem Snapshot</h2>
                    <div className="ecosystem-line"></div>
                </div>

                <div className="ecosystem-grid">
                    {ecosystems.map((item) => (
                        <Link key={item.id} to={item.path} className="ecosystem-card">
                            <div className="eco-card-inner">
                                <div className="eco-icon-wrapper">
                                    {item.icon}
                                </div>
                                <div className="eco-content">
                                    <h3 className="eco-card-title">{item.title}</h3>
                                    <p className="eco-card-desc">{item.description}</p>
                                </div>
                                <div className="eco-arrow">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default EcosystemSnapshot
