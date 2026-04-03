import React from 'react';
import './BrandLogo.css';

const BrandLogo = ({ src, alt, className = '' }) => {
    if (!src) return null;

    return (
        <div className={`brand-logo-wrapper ${className}`}>
            <img src={src} alt={alt} className="brand-logo-img" loading="lazy" width="180" height="60" />
        </div>
    );
};

export default BrandLogo;
