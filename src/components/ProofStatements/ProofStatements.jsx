import Section from '../common/Section/Section'
import Container from '../common/Container/Container'
import { ShieldCheck, GitMerge, Users, BarChart3, ArrowRight } from 'lucide-react'
import './ProofStatements.css'

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Single-Point Accountability',
    description: 'Most developers juggle 8–12 vendors with no unified oversight. Helix governs the entire lifecycle under one framework — from structuring to delivery.',
    contrast: 'Others fragment responsibility. Helix owns the outcome.'
  },
  {
    icon: GitMerge,
    title: 'Integrated Lifecycle Execution',
    description: 'Advisory, engineering, finishing, workforce, and marketing operate as a coordinated system — not siloed departments or outsourced functions.',
    contrast: 'Others consult in isolation. Helix executes end-to-end.'
  },
  {
    icon: Users,
    title: 'In-House Ecosystem, Not Vendors',
    description: 'Helix Infrastructure, Helix 360, LaborPro, and Aabha & Dhwani are internal divisions — ensuring aligned incentives and governed quality.',
    contrast: 'Others outsource. Helix delivers with its own teams.'
  },
  {
    icon: BarChart3,
    title: 'Predictable, Governed Delivery',
    description: 'Every engagement follows a standardized 4-phase framework — Development Structuring, Engineering Governance, Coordinated Execution, and Market-Ready Delivery.',
    contrast: 'Others improvise. Helix follows a proven process.'
  }
]

function ProofStatements() {
  return (
    <Section className="proof-section differentiator-section">
      <Container>
        <div className="proof-header text-center">
          <span className="diff-eyebrow">What Sets Helix Apart</span>
          <h2 className="proof-title">A Clear Differentiator</h2>
          <p className="proof-subtitle">
            Helix doesn't just consult — it structures, governs, and delivers real estate projects
            with end-to-end accountability that no fragmented vendor model can match.
          </p>
        </div>

        <div className="diff-grid">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="diff-card">
                <div className="diff-card-glow"></div>
                <div className="diff-card-header">
                  <div className="diff-icon-wrap">
                    <IconComponent className="diff-icon" strokeWidth={1.5} />
                  </div>
                  <h3 className="diff-card-title">{item.title}</h3>
                </div>
                <p className="diff-card-desc">{item.description}</p>
                <div className="diff-card-contrast">
                  <ArrowRight size={14} className="diff-contrast-arrow" />
                  <span>{item.contrast}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  )
}

export default ProofStatements
