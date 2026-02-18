import React from 'react';
import { Compass, Shield, Hammer, Rocket, ChevronRight } from 'lucide-react';
import Container from '../common/Container/Container';
import './HelixDevelopmentFramework.css';

const phases = [
    {
        number: '01',
        label: 'Phase 1',
        title: 'Development Structuring',
        description: 'Helix structures every engagement from feasibility through regulatory planning — establishing commercial viability before capital commitment.',
        icon: Compass,
        bullets: [
            'Feasibility analysis & financial modelling',
            'Regulatory planning & approval coordination',
            'Project structuring & investment framework'
        ]
    },
    {
        number: '02',
        label: 'Phase 2',
        title: 'Engineering & Governance',
        description: 'Technical design governed by compliance frameworks, ensuring execution readiness across structural, architectural, and MEP disciplines.',
        icon: Shield,
        bullets: [
            'Architectural & structural engineering',
            'Governance framework integration',
            'Compliance & quality benchmarks'
        ]
    },
    {
        number: '03',
        label: 'Phase 3',
        title: 'Coordinated Execution',
        description: 'On-site project management with disciplined quality assurance protocols and stakeholder alignment through structured delivery milestones.',
        icon: Hammer,
        bullets: [
            'On-site supervision & progress tracking',
            'Vendor coordination & procurement',
            'Quality assurance & safety governance'
        ]
    },
    {
        number: '04',
        label: 'Phase 4',
        title: 'Market-Ready Delivery',
        description: 'Coordinated finishing, handover protocols, and integrated marketing execution ensuring every project reaches commercial launch on schedule.',
        icon: Rocket,
        bullets: [
            'Finishing & MEP completion coordination',
            'Handover protocols & documentation',
            'Integrated marketing & sales execution'
        ]
    }
];

const HelixDevelopmentFramework = () => {
    return (
        <section className="hdf-section">
            <Container>
                {/* Header */}
                <div className="hdf-header">
                    <span className="hdf-eyebrow">Standardized Model</span>
                    <h2 className="hdf-main-title">
                        The Helix Development<br />Framework
                    </h2>
                    <p className="hdf-main-subtitle">
                        Four structured phases that govern every Helix engagement — from opportunity assessment to market-ready delivery.
                    </p>
                </div>

                {/* Timeline */}
                <div className="hdf-timeline">
                    <div className="hdf-timeline-line" aria-hidden="true"></div>

                    {phases.map((phase) => {
                        const IconComponent = phase.icon;
                        return (
                            <div key={phase.number} className="hdf-phase-row">
                                {/* Card */}
                                <div className="hdf-phase-card">
                                    <span className="hdf-card-phase-label">{phase.label}</span>
                                    <div className="hdf-card-top">
                                        <div className="hdf-card-icon-wrap">
                                            <IconComponent className="hdf-card-icon" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="hdf-card-title">{phase.title}</h3>
                                    </div>
                                    <p className="hdf-card-desc">{phase.description}</p>
                                    <ul className="hdf-card-bullets">
                                        {phase.bullets.map((bullet, i) => (
                                            <li key={i}>
                                                <span className="hdf-bullet-dot"></span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Center Node */}
                                <div className="hdf-phase-node">
                                    <div className="hdf-node-dot">{phase.number}</div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hdf-phase-spacer"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Flow Summary */}
                <div className="hdf-flow-summary">
                    {phases.map((phase, index) => (
                        <React.Fragment key={phase.number}>
                            <div className="hdf-flow-chip">
                                <span className="hdf-flow-chip-number">{phase.number}</span>
                                {phase.title}
                            </div>
                            {index < phases.length - 1 && (
                                <div className="hdf-flow-arrow" aria-hidden="true">
                                    <ChevronRight size={16} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HelixDevelopmentFramework;
