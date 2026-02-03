import { Link } from 'react-router-dom'
import ProofStatements from '../../components/ProofStatements/ProofStatements'
import './Home.css'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">
              Consult. Design. Build. Deliver.
            </h1>
            <p className="hero-subtitle">
              Helix Group is a B2B consulting and delivery organisation combining engineering, 
              project management, execution, and go-to-market capability under one accountable framework.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Business Conversation
                <span>→</span>
              </Link>
              <Link to="/infrastructure" className="btn btn-outline">
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Projects Fail Section */}
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Why Projects Fail — Even with Good Consultants</h2>
          </header>
          <div className="failure-points">
            <div className="failure-point">
              <span className="failure-icon">✗</span>
              <p>Advice stops at drawings</p>
            </div>
            <div className="failure-point">
              <span className="failure-icon">✗</span>
              <p>Execution drifts on site</p>
            </div>
            <div className="failure-point">
              <span className="failure-icon">✗</span>
              <p>Costs escalate late</p>
            </div>
            <div className="failure-point">
              <span className="failure-icon">✗</span>
              <p>Post-plaster stage causes maximum leakage</p>
            </div>
          </div>
          <div className="bridge-line">
            <p>Helix was built to close this gap — by staying accountable till delivery.</p>
          </div>
        </div>
      </section>

      {/* One Framework Section */}
      <section className="section section-alt">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">One Framework. End-to-End Accountability.</h2>
            <p className="section-highlight">
              We don't just design projects. We build what we design.
            </p>
            <p className="section-subtitle">
              Single-point accountability for serious B2B real estate and infrastructure projects.
            </p>
          </header>
        </div>
      </section>

      {/* Proof Statements */}
      <ProofStatements />

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-content">
              <h2 className="cta-band-title">
                Planning a B2B real estate or infrastructure project?
              </h2>
              <p className="cta-band-subtitle">
                Share your brief and we'll revert with a structured view on feasibility, 
                timelines and optimal delivery models for your asset.
              </p>
              <div className="cta-band-meta mt-sm">
                <span>Strategic advisory for land owners & HNIs</span>
                <span>Execution support for builders & developers</span>
              </div>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-primary">
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
