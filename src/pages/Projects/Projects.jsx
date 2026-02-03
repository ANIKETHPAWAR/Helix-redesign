import './Projects.css'

function Projects() {
  // This is a placeholder - you can add actual project data later
  const projects = [
    {
      title: "Multi-phase Residential Township",
      location: "Hyderabad",
      description: "End-to-end project delivery including structuring, approvals, and sales execution.",
      metrics: {
        area: "1.5 lakh sq.ft.",
        units: "250+",
        timeline: "36 months"
      }
    },
    {
      title: "Mixed-Use Development",
      location: "South India",
      description: "Engineering-led advisory and commercial execution across multiple phases.",
      metrics: {
        area: "5,00,000+ sq.ft.",
        units: "600+",
        timeline: "Ongoing"
      }
    }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="page-eyebrow">Projects</p>
          <h1 className="page-title">Executed at Scale. Delivered on Ground.</h1>
          <p className="page-subtitle">
            Our portfolio demonstrates proven capability across B2B real estate and infrastructure projects.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-image-placeholder">
                  <div className="project-badge">Helix-led</div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-location">{project.location}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-metrics">
                    <div className="metric-item">
                      <span className="metric-label">Area</span>
                      <span className="metric-value">{project.metrics.area}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Units</span>
                      <span className="metric-value">{project.metrics.units}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Timeline</span>
                      <span className="metric-value">{project.metrics.timeline}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
