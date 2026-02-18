import Section from '../common/Section/Section'
import Container from '../common/Container/Container'
import './AuthorityMetrics.css'

function AuthorityMetrics() {
    const metrics = [
        { value: "10,000+", label: "Units Structured" },
        { value: "5,00,000+", label: "Sq Ft Developed" },
        { value: "600+", label: "Villas & Apartments Delivered" }
    ]

    return (
        <Section className="proof-section authority-metrics-section">
            <Container>
                <div className="proof-grid">
                    {metrics.map((metric, index) => (
                        <div key={index} className="proof-card">
                            <div className="proof-value">{metric.value}</div>
                            <div className="proof-label">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default AuthorityMetrics
