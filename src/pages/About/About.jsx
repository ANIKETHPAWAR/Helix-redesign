import './About.css'

function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="page-eyebrow">About Helix</p>
          <h1 className="page-title">One Framework. End-to-End Accountability.</h1>
          <p className="page-subtitle">
            Helix Group is a B2B consulting and delivery organisation combining engineering,
            project management, execution, and go-to-market capability under one accountable framework.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <article className="prose">
              <h2>Who We Are</h2>
              <p>
                Helix Group was built to close the gap between consulting advice and
                actual delivery. We don't just design projects—we build what we design,
                ensuring accountability from concept to commercial success.
              </p>
              <p>
                Our integrated approach combines:
              </p>
              <ul className="feature-list">
                <li>Engineering expertise and technical advisory</li>
                <li>Project management and execution control</li>
                <li>Go-to-market capability and sales execution</li>
                <li>Post-plaster finishing and integrated delivery</li>
              </ul>

              <h2>Our Approach</h2>
              <p>
                We provide single-point accountability for serious B2B real estate and
                infrastructure projects. Unlike traditional consultants who stop at drawings,
                Helix stays accountable till delivery—ensuring execution doesn't drift on site,
                costs don't escalate late, and post-plaster stages don't cause maximum leakage.
              </p>
            </article>

            <aside className="info-card">
              <p className="card-meta">Core Values</p>
              <h3 className="card-title">Accountability First</h3>
              <p className="text-muted">
                We believe in staying accountable from concept to delivery, ensuring
                every project meets its commercial and quality objectives.
              </p>
              <div className="values-list">
                <div className="value-item">
                  <span className="value-icon"></span>
                  <span>End-to-end accountability</span>
                </div>
                <div className="value-item">
                  <span className="value-icon"></span>
                  <span>Execution discipline</span>
                </div>
                <div className="value-item">
                  <span className="value-icon"></span>
                  <span>Commercial focus</span>
                </div>
                <div className="value-item">
                  <span className="value-icon"></span>
                  <span>Quality delivery</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
