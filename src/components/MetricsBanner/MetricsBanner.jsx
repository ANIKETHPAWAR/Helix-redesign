import React from 'react';
import './MetricsBanner.css';

const metrics = [
    { value: '5,00,000+', label: 'Sq Ft Mixed-Use Development' },
    { value: '600+', label: 'Villas & Apartments Delivered' },
    { value: '10,000+', label: 'Homes Sold' },
    { value: '4M+', label: 'Sq Ft Painting Executed' }
];

const MetricsBanner = () => {
    return (
        <div className="metrics-banner">
            <div className="metrics-banner-inner">
                {metrics.map((metric, index) => (
                    <div key={index} className="metrics-banner-item">
                        <span className="metrics-banner-value">{metric.value}</span>
                        <span className="metrics-banner-label">{metric.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetricsBanner;
