import Section from '../common/Section/Section'
import Container from '../common/Container/Container'
import './ProofStatements.css'

function ProofStatements() {
  const metrics = [
    { value: "5,00,000+", label: "Sq Ft Mixed-Use Development" },
    { value: "600+", label: "Villas & Apartments Delivered" },
    { value: "10,000+", label: "Homes Sold" },
    { value: "4M+", label: "Sq Ft Painting Executed" },
    { value: "1M+", label: "Sq Ft Flooring Laid" },
    { value: "2,000+", label: "Bathrooms Fitted" },
    { value: "5,000+", label: "Units Electrically Wired" }
  ]

  return (
    <Section className="proof-section">
      <Container>
        <div className="proof-header text-center">
          <h2 className="proof-title">Executed at Scale. Delivered on Ground.</h2>
          <p className="proof-subtitle">Proof of our commitment to accountability</p>
        </div>
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

export default ProofStatements
