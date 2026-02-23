import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
    children,
    to,
    variant = 'primary',
    className = '',
    onClick,
    type = 'button',
    disabled = false
}) => {
    const btnClass = `btn btn-${variant} ${className}`;

    if (to) {
        return (
            <Link to={to} className={btnClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={btnClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
