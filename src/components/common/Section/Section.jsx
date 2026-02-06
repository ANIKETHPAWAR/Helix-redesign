import React from 'react';
import './Section.css';
import Container from '../Container/Container';

const Section = ({
    children,
    className = '',
    id = '',
    dark = false,
    fullWidth = false
}) => {
    return (
        <section
            id={id}
            className={`section-component ${dark ? 'section-dark' : ''} ${className}`}
        >
            {fullWidth ? children : <Container>{children}</Container>}
        </section>
    );
};

export default Section;
