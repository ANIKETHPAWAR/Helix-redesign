import { Link } from 'react-router-dom'
import './Infrastructure.css'

function Infrastructure() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="page-eyebrow">Helix Infrastructure</p>
          <h1 className="page-title">From Concept to Commercial Success</h1>
          <p className="page-subtitle">
            Engineering-led advisory, execution control, and large-scale real estate project marketing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <article className="prose">
              <h2>Real Estate Project Marketing & Sales</h2>
              <p className="highlight-text">
                10,000+ homes sold across South India.
              </p>
              <p>
                Helix Infrastructure combines deep engineering expertise with proven 
                go-to-market capabilities. We don't just design projects—we ensure 
                they succeed commercially through strategic marketing and sales execution.
              </p>
              <p>
                Our integrated approach covers the complete project lifecycle:
              </p>
              <ul className="feature-list">
                <li>Engineering-led feasibility and design</li>
                <li>Project structuring and approvals</li>
                <li>Execution oversight and quality control</li>
                <li>Strategic marketing and sales execution</li>
                <li>Post-delivery support and handover</li>
              </ul>
            </article>

            <aside className="info-card">
              <p className="card-meta">Capabilities</p>
              <h3 className="card-title">End-to-End Project Delivery</h3>
              <p className="text-muted">
                From initial concept through commercial success, Helix Infrastructure 
                provides single-point accountability for serious B2B real estate projects.
              </p>
              <div className="capabilities-list">
                <span className="capability-pill">Engineering Advisory</span>
                <span className="capability-pill">Project Management</span>
                <span className="capability-pill">Sales & Marketing</span>
                <span className="capability-pill">Execution Control</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-content">
              <h2 className="cta-band-title">
                Ready to discuss your infrastructure project?
              </h2>
              <p className="cta-band-subtitle">
                Let's explore how Helix Infrastructure can deliver your project from concept to commercial success.
              </p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Infrastructure
