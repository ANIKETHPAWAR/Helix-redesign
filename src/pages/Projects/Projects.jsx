import React, { useState } from 'react';
import Container from '../../components/common/Container/Container';
import { ProjectCard } from '../../components/common/Card/Card';
import './Projects.css';

function Projects() {
  const [activeTab, setActiveTab] = useState('completed');

  const projects = {
    completed: [
      {
        title: "Harini Mansion",
        location: "Medipally, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 61 Villas in 4 acres totalling to 1,24,507 Sq. Ft.",
        metrics: { units: "61 Villas", area: "4 Acres" }
      },
      {
        title: "Vayun Meadows",
        location: "Yapral, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 50 Apartments in 2500 Sq.Yds totalling to 79,670 Sq. Ft.",
        metrics: { units: "50 Apts", area: "2500 Sq.Yds" }
      },
      {
        title: "The Park Residency Apartments",
        location: "Saket Township, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 25 Apartments in 1500 Sq.Yds totalling to 66,825 Sq. Ft.",
        metrics: { units: "25 Apts", area: "1500 Sq.Yds" }
      },
      {
        title: "Lakshmi Elite Villas",
        location: "Kapra, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 111 Villas in 8 acres totalling to 2,33,060 Sq. Ft.",
        metrics: { units: "111 Villas", area: "8 Acres" }
      },
      {
        title: "Christian Charitable Trust",
        location: "Telangana (Raichur)",
        description: "Scope of work: Design and Construction of 10,000 Sq. Ft, School Building in 4 acres at Raichur.",
        metrics: { area: "4 Acres", type: "Institutional" }
      },
      {
        title: "Christian Charitable Trust",
        location: "Telangana (Yelburga)",
        description: "Scope of work: Design and Construction of 10,000 Sq. Ft, School Building in 3.5 acres at Yelburga",
        metrics: { area: "3.5 Acres", type: "Institutional" }
      },
      {
        title: "Christian Charitable Trust",
        location: "Telangana (Mysore)",
        description: "Scope of work: Design and Construction of 10,000 Sq. Ft School Building in 3.5 acres at Mysore.",
        metrics: { area: "3.5 Acres", type: "Institutional" }
      },
      {
        title: "Christian Charitable Trust",
        location: "Bengaluru (Kalyan Nagar)",
        description: "Scope of work: Identification of Land, Design and Construction and Lease of 12,000 Sq. Ft Commercial Building in 444 Sq.Yds at Kalyan Nagar, Bengaluru.",
        metrics: { area: "444 Sq.Yds", type: "Commercial" }
      },
      {
        title: "Reputed Private School Chain",
        location: "Telangana (Hyderabad)",
        description: "Scope of work: Design and Construction of 100,000 Sq. Ft School Building in 2 acres at Hyderabad.",
        metrics: { area: "2 Acres", type: "Institutional" }
      }
    ],
    in_progress: [
      {
        title: "Riverside Commercial Complex",
        location: "Vijayawada",
        description: "Ongoing construction of a premium commercial complex overlooking the river.",
        metrics: { area: "50,000 Sq.Ft", status: "Structure Complete" }
      },
      {
        title: "Green Valley Gated Community",
        location: "Vizag",
        description: "Development of a sustainable gated community with eco-friendly amenities.",
        metrics: { units: "120 Villas", status: "Phase 1 Booking" }
      }
    ],
    pipeline: [
      {
        title: "Tech Park Expansion",
        location: "Hyderabad (Financial District)",
        description: "Proposed expansion of existing tech park infrastructure.",
        metrics: { area: "2,00,000 Sq.Ft", status: "Planning" }
      },
      {
        title: "Urban Renewal Project",
        location: "Warangal",
        description: "Revitalization of city center commercial zone.",
        metrics: { area: "5 Acres", status: "Approval Stage" }
      }
    ]
  };

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <p className="page-eyebrow">Our Portfolio</p>
          <h1 className="page-title">Executed at Scale. Delivered on Ground.</h1>
          <p className="page-subtitle">
            From residential townships to institutional campuses, our portfolio demonstrates proven execution capability.
          </p>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="section">
        <Container>
          {/* Tabs */}
          <div className="projects-tabs">
            <button
              className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed Projects
            </button>
            <button
              className={`tab-button ${activeTab === 'in_progress' ? 'active' : ''}`}
              onClick={() => setActiveTab('in_progress')}
            >
              In Progress
            </button>
            <button
              className={`tab-button ${activeTab === 'pipeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('pipeline')}
            >
              Pipeline
            </button>
          </div>

          {/* Grid */}
          <div className="project-grid">
            {projects[activeTab].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                location={project.location}
                description={project.description}
                metrics={project.metrics}
              />
            ))}
          </div>

          {projects[activeTab].length === 0 && (
            <div className="no-projects">
              <p>No projects currently listed in this category.</p>
            </div>
          )}

        </Container>
      </section>
    </div>
  )
}

export default Projects
