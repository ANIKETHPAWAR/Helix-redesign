import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export const Card = ({ children, className = '', noPadding = false }) => {
    return (
        <div className={`card ${noPadding ? 'card-no-padding' : ''} ${className}`}>
            {children}
        </div>
    );
};

export const FeatureCard = ({ icon, title, description }) => {
    return (
        <Card className="feature-card">
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
        </Card>
    );
};

export const MetricCard = ({ number, label, suffix = '+' }) => {
    return (
        <Card className="metric-card">
            <div className="metric-number">
                {number}<span className="metric-suffix">{suffix}</span>
            </div>
            <div className="metric-label">{label}</div>
        </Card>
    );
};

export const ServiceCard = ({ title, description, linkTo, image }) => {
    return (
        <Card className="service-card" noPadding>
            {image && <div className="service-image" style={{ backgroundImage: `url(${image})` }}></div>}
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-desc">{description}</p>
                <Link to={linkTo} className="service-link">Learn More &rarr;</Link>
            </div>
        </Card>
    );
};



export const ProjectCard = ({ title, location, description, metrics, image }) => {
    return (
        <Card className="project-card glass-card" noPadding>
            {image && <img src={image} alt={title} className="project-card-bg-image" />}
            {image && <div className="project-card-overlay"></div>}
            <div className="project-content-wrapper">
                <div className="project-header">
                    <div className="project-location-badge">
                        <MapPin size={14} style={{ marginRight: '6px' }} />
                        {location}
                    </div>
                    <h3 className="project-title">{title}</h3>
                </div>

                <div className="project-body-content">
                    <p className="project-desc">{description}</p>
                </div>

                {metrics && (
                    <div className="project-metrics">
                        {Object.entries(metrics).map(([key, value]) => (
                            <div key={key} className="project-metric">
                                <div className="metric-info">
                                    <span className="metric-value">{value}</span>
                                    <span className="metric-label">{key}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Decorative elements */}
            <div className="project-card-glow"></div>
            <div className="project-card-border"></div>
        </Card>
    );
};

export default Card;
