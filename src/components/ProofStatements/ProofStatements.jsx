import Section from '../common/Section/Section'
import Container from '../common/Container/Container'
import { Building2, Layers, Briefcase, Zap } from 'lucide-react'
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
          <h2 className="proof-title">Modern Real Estate Development Needs Integrated Thinking</h2>
          <p className="proof-subtitle">Fragmented project execution, inconsistent vendor coordination, regulatory challenges, and inefficient marketing strategies often delay projects and erode profitability. Helix Group solves these challenges by integrating development advisory, engineering, execution, marketing, and operational solutions into a unified delivery model.</p>
        </div>
        <div className="proof-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="proof-card">
              <div className="proof-value">{metric.value}</div>
              <div className="proof-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="proof-highlights">
          <div className="highlight-card premium-glass">
            <div className="card-glow"></div>
            <div className="highlight-icon-wrapper">
              <Building2 className="highlight-icon" strokeWidth={1.5} />
            </div>
            <div className="highlight-content">
              <h3 className="highlight-text">Multi-city project execution expertise</h3>
              <p className="highlight-desc">Seamless delivery across diverse locations.</p>
            </div>
          </div>

          <div className="highlight-card premium-glass">
            <div className="card-glow"></div>
            <div className="highlight-icon-wrapper">
              <Layers className="highlight-icon" strokeWidth={1.5} />
            </div>
            <div className="highlight-content">
              <h3 className="highlight-text">Integrated development lifecycle & management</h3>
              <p className="highlight-desc">End-to-end solutions for maximum efficiency.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProofStatements
