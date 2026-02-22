import React, { useState } from 'react';
import Container from '../../components/common/Container/Container';
import { ProjectCard } from '../../components/common/Card/Card';
import './Projects.css';

import hariniImg from '../../assets/Harini-Mansion-Medipally-Hyd.png';
import homeTownImg from '../../assets/vayun.png';
import parkResidencyImg from '../../assets/The-Park-Residency-Saket-Township- Hyd.png';
import lakshmiEliteImg from '../../assets/Lakshmi-Elite-Villas-Vampuguda-Kapra-Hyd.png';
import schoolShimogaImg from '../../assets/School-Building-Shimoga.jpeg';
import schoolYelburgaImg from '../../assets/School-Building-Yelburga.jpeg';
import schoolMysoreImg from '../../assets/School-Building-Mysore.jpeg';
import commercialBangaloreImg from '../../assets/Commercial-Project-Banglore.png';
import ladiesHostelImg from '../../assets/Ladies-Hostel-Building-Medchal-Hyd.png';
import schoolShimogaPngImg from '../../assets/School-Building-Shimoga.png';

function Projects() {
  const [activeTab, setActiveTab] = useState('completed');

  const projects = {
    completed: [
      {
        title: "Harini Mansion",
        location: "Medipally, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 61 Villas in 4 acres totalling to 1,24,507 Sq. Ft.",
        metrics: { units: "61 Villas", area: "4 Acres" },
        image: hariniImg
      },
      {
        title: "Vayun Meadows",
        location: "Yapral, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 50 Apartments in 2500 Sq.Yds totalling to 79,670 Sq. Ft.",
        metrics: { units: "50 Apts", area: "2500 Sq.Yds" },
        image: homeTownImg
      },
      {
        title: "The Park Residency Apartments",
        location: "Saket Township, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 25 Apartments in 1500 Sq.Yds totalling to 66,825 Sq. Ft.",
        metrics: { units: "25 Apts", area: "1500 Sq.Yds" },
        image: parkResidencyImg
      },
      {
        title: "Lakshmi Elite Villas",
        location: "Kapra, Hyderabad",
        description: "Scope of work: Design, Construction and Sales of 111 Villas in 8 acres totalling to 2,33,060 Sq. Ft.",
        metrics: { units: "111 Villas", area: "8 Acres" },
        image: lakshmiEliteImg
      },
      {
        title: "Christian Charitable Trust",
        location: "Telangana (Raichur)",
        description: "Scope of work: Design and Construction of 10,000 Sq. Ft, School Building in 4 acres at Raichur.",
        metrics: { area: "4 Acres", type: "Institutional" },
        image: schoolShimogaImg
      },
      {
        title: "Christian Charitable Trust",
        location: "Telangana (Yelburga)",
        description: "Scope of work: Design and Construction of 10,000 Sq. Ft, School Building in 3.5 acres at Yelburga",
        metrics: { area: "3.5 Acres", type: "Institutional" },
        image: schoolYelburgaImg
      },
      {
        title: "Christian Charitable Trust",
        location: "Telangana (Mysore)",
        description: "Scope of work: Design and Construction of 10,000 Sq. Ft School Building in 3.5 acres at Mysore.",
        metrics: { area: "3.5 Acres", type: "Institutional" },
        image: schoolMysoreImg
      },
      {
        title: "Christian Charitable Trust",
        location: "Bengaluru (Kalyan Nagar)",
        description: "Scope of work: Identification of Land, Design and Construction and Lease of 12,000 Sq. Ft Commercial Building in 444 Sq.Yds at Kalyan Nagar, Bengaluru.",
        metrics: { area: "444 Sq.Yds", type: "Commercial" },
        image: commercialBangaloreImg
      },
      {
        title: "Reputed Private School Chain",
        location: "Telangana (Hyderabad)",
        description: "Scope of work: Design and Construction of 100,000 Sq. Ft School Building in 2 acres at Hyderabad.",
        metrics: { area: "2 Acres", type: "Institutional" },
        image: schoolMysoreImg
      }
    ],
    in_progress: [
      {
        title: "Christian Charitable Trust",
        location: "Telangana ",
        description: "Ongoing Design and Construction of Hostel Building in 800 Sq.Yds at KLR NJR Layout, Medchal totalling to 23600 Sq. Ft.",
        metrics: { area: "800 Sq.Yds", status: "Structure Complete" },

      },
      {
        title: "Christian Charitable Trust",
        location: "Telangana ",
        description: "Design and Construction of School Building in 3.6 acres at Shimoga totalling to 10,000 Sq. Ft.",
        metrics: { area: "3.6 acres", status: "Structure Complete" },

      }
    ],
    pipeline: [
      {
        title: "Residential Villas",
        location: "Shankarpally",
        description: "Design, Construction and Sales of Villas (99 units) in 3,96,000 sft across 10.5 acres at Shankarpally.",
        metrics: { units: "99 Villas", area: "10.5 Acres" }

      },
      {
        title: "Residential Apartments",
        location: "Medchal (KLR NJR Layout)",
        description: "Design and Construction of 8 Apartments in 400 Sq.Yds with overall area of 9900 sft at KLR NJR Layout, Medchal.",
        metrics: { units: "8 Apts", area: "400 Sq.Yds" }
      },
      {
        title: "The Elysium",
        location: "Mangalpalle, Adibhatla",
        description: "Design, Construction and Sales of 187 Villas, 1 million sft Commercial space and 1 million sft Residential space.",
        metrics: { units: "187 Villas", type: "Mixed-use" }
      },
      {
        title: "School Building",
        location: "Narayanpet, Telangana",
        description: "Design and Construction of 10,000 sft School Building in 3.6 acres at Narayanpet, Telangana.",
        metrics: { area: "3.6 Acres", type: "Institutional" },
        image: schoolYelburgaImg

      }
    ]
  };

  return (
    <div className="projects-page premium-gradient-bg">
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
                image={project.image}
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
