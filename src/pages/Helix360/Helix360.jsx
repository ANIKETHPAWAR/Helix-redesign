import { Link } from 'react-router-dom'
import './Helix360.css'

function Helix360() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="page-eyebrow">Helix 360</p>
          <h1 className="page-title">Where Civil Contractors Stop, Helix 360 Takes Over</h1>
          <p className="page-subtitle">
            Post-plaster execution and integrated finishing partner.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <article className="prose">
              <h2>Complete Finishing Solutions</h2>
              <p>
                Helix 360 specializes in post-plaster execution—the critical phase where 
                projects often face maximum cost leakage and quality issues. We provide 
                integrated finishing services that ensure your project is delivered to 
                the highest standards.
              </p>
              <p>
                Our comprehensive approach covers:
              </p>
              <ul className="feature-list">
                <li>Painting & Surface Finishing</li>
                <li>Flooring Installation</li>
                <li>Bathroom Fitting & Tiling</li>
                <li>Electrical & Lighting</li>
                <li>Plumbing & Fixtures</li>
                <li>Quality Control & Handover</li>
              </ul>
              <p className="highlight-text">
                With 4 million+ sq ft of painting executed, 1 million+ sq ft of flooring laid, 
                and 2,000+ bathrooms fitted, Helix 360 brings proven execution capability to 
                every project.
              </p>
            </article>

            <aside className="info-card">
              <p className="card-meta">Why Helix 360</p>
              <h3 className="card-title">Integrated Finishing Partner</h3>
              <p className="text-muted">
                We bridge the gap between structural completion and final handover, 
                ensuring seamless execution and quality delivery.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <p className="stat-value">4M+</p>
                  <p className="stat-label">sq ft painted</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">1M+</p>
                  <p className="stat-label">sq ft flooring</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">2K+</p>
                  <p className="stat-label">bathrooms fitted</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">5K+</p>
                  <p className="stat-label">units wired</p>
                </div>
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
                Need a reliable finishing partner?
              </h2>
              <p className="cta-band-subtitle">
                Let Helix 360 handle your post-plaster execution with proven expertise and accountability.
              </p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss your project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Helix360
