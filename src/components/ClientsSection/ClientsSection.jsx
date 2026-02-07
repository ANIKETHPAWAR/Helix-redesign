import React from 'react';
import Container from '../common/Container/Container';
import './ClientsSection.css';

const ClientsSection = () => {
    const clients = [
        "SRJ Constructions",
        "Harini Mansion Pvt. Ltd",
        "The Park Residency Apartments",
        "Vayun Meadows",
        "JB Serene Villas",
        "Akshara International School",
        "Susheela Associates (Varanasi)",
        "US Based NGO",
        "HDFC Bank",
        "ICICI Bank",
        "SBI Bank"
    ];

    // Double the array to create seamless loop
    const marqueeClients = [...clients, ...clients];

    return (
        <section className="clients-section">
            <Container>
                <div className="clients-header">
                    <h2 className="clients-title">Our Clientele</h2>
                    <p className="clients-subtitle">Trusted by leading organizations and developers.</p>
                </div>
            </Container>

            <div className="marquee-container">
                <div className="marquee-track">
                    {marqueeClients.map((client, index) => (
                        <div key={`${client}-${index}`} className="client-item">
                            <span className="client-name">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
