import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

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

export default Card;
