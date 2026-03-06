import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Ruler, Tag } from 'lucide-react';

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



const metricIcon = (key) => {
    const k = key.toLowerCase();
    if (k === 'units' || k === 'type') return <Building2 size={14} />;
    if (k === 'area') return <Ruler size={14} />;
    return <Tag size={14} />;
};

export const ProjectCard = ({ title, location, description, metrics, image }) => {
    return (
        <div className="project-card-v2">
            {/* Image Section */}
            <div className="project-card-image-wrapper">
                {image ? (
                    <img src={image} alt={title} className="project-card-image" />
                ) : (
                    <div className="project-card-placeholder">
                        <Building2 size={48} />
                        <span>Project Image</span>
                    </div>
                )}
                <div className="project-card-image-gradient"></div>
            </div>

            {/* Content Section */}
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <div className="project-card-location">
                    <MapPin size={14} />
                    <span>{location}</span>
                </div>

                {metrics && Object.keys(metrics).length > 0 && (
                    <div className="project-card-metrics">
                        {Object.entries(metrics).map(([key, value]) => (
                            <div key={key} className="project-card-metric-pill">
                                {metricIcon(key)}
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const ProjectCardDark = ({ title, location, description, metrics }) => {
    return (
        <div className="project-card-dark">
            <div className="project-card-dark-content">
                <div className="project-card-dark-location">
                    <MapPin size={14} />
                    <span>{location}</span>
                </div>
                <h3 className="project-card-dark-title">{title}</h3>
                {description && (
                    <p className="project-card-dark-desc">{description}</p>
                )}
                {metrics && Object.keys(metrics).length > 0 && (
                    <div className="project-card-dark-metrics">
                        {Object.entries(metrics).map(([key, value]) => (
                            <div key={key} className="project-card-dark-metric">
                                {metricIcon(key)}
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
