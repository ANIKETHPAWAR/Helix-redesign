import React, { useState } from 'react';
import Container from '../../components/common/Container/Container';
import { ProjectCard, ProjectCardDark } from '../../components/common/Card/Card';
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
import jbSereneCityImg from '../../assets/JB-Serene-City-Ibrahimpatnam-Hyd.png';
import aksharaSchoolImg from '../../assets/Akshara.jpg';
import hth from '../../assets/HTH.png';
import ASC from '../../assets/ASC.jpeg';
import greenOaksImg from '../../assets/GO.jpg';
import vmImg from '../../assets/VM.jpg';
import snImg from '../../assets/SN.jpg';
import trrImg from '../../assets/TRR.png';
import botekImg from '../../assets/BF.jpg';
import s2Img from '../../assets/Shimoga-2.jpg';
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
        image: vmImg
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
        title: "Good Shepherd School",
        location: "Karnataka (Raichur)",
        description: "Scope of work: Identification of land, Design and Construction of School Building in 4 acres with 10,000 sft at Raichur.",
        metrics: { area: "4 Acres", type: "Institutional" },
        image: schoolShimogaImg
      },
      {
        title: "Good Shepherd High School",
        location: "Karnataka (Yelburga)",
        description: "Scope of work: Identification of land, Design and Construction of School Building in 3.5 acres with 10,000 sft at Yelburga.",
        metrics: { area: "3.5 Acres", type: "Institutional" },
        image: schoolYelburgaImg
      },
      {
        title: "School Building",
        location: "Mysore",
        description: "Scope of work: Identification of land, Design and Construction of School Building in 3.5 acres with 10,000 sft at Mysore",
        metrics: { area: "3.5 Acres", type: "Institutional" },
        image: schoolMysoreImg
      },
      {
        title: "Commercial Building",
        location: "Bengaluru (Kalyan Nagar)",
        description: "Scope of work:Identification of land, Design and Construction of Commercial Building in 4 acres with 12,000 sft at Kalyan Nagar, Banglore",
        metrics: { area: "4 Acres", type: "Commercial" },
        image: commercialBangaloreImg
      },
      {
        title: "Hostel Building",
        location: "Medchal (KLR NJR Layout)",
        description: "Scope of work: Identification of land, Design and Construction of Hostel Building in 800 Sq.Yds with 23600 sft at KLR NJR Layout, Medchal",
        metrics: { area: "800 Sq.Yds", type: "Institutional" },
        image: ladiesHostelImg
      },
      {
        title: "Good Shepherd School",
        location: "Shimoga (Karnataka)",
        description: "Scope of work: Identification of land, Design and Construction of School Building in 3.6 acres with 10,000 sft at Shimoga.",
        metrics: { area: "3.6 Acres", type: "Institutional" },
        image: s2Img
      },
      {
        title: "JB Serene City",
        location: "Telangana (Ibrahimpatnam)",
        description: "Scope of work: Construction of 340 villas in Ibrahimpatnam sizes ranging from 3000 sft to 4000 sft",
        metrics: { units: "340 Villas", },
        image: jbSereneCityImg
      },
      {
        title: "Akshara International School",
        location: "Telangana (Kushaiguda)",
        description: "Scope of work: Identification of land, Design and Construction of School Building on 3 acres with 30,000 sft for Akshara International School at Kushaiguda, Hyderabad.",
        metrics: { Area: "3 Acres", type: "Institutional" },
        image: aksharaSchoolImg
      },
      {
        title: "Home Town Heights",
        location: "Telangana (Yapral)",
        description: "Scope of work: Design and Sales of Residential Apartment in 1 acre 9 guntas with 1,92,000 sft at Home Town Heights, Kowkoor, Yapral, Secunderabad.",
        metrics: { Area: "1 acre 9 guntas", type: "Residential" },
        image: hth
      },
      {
        title: "Advait Senior Living",
        location: "Telangana (Medchal)",
        description: "Scope of work: Design and Sales of Senior Citizen Homes at Advait Senior Living, Medchal.",
        metrics: { Area: "-", type: "Residential" },
        image: ASC
      },
      {
        title: "Green Oaks",
        location: "Telangana (Cherlapally)",
        description: "Scope of work: Design, Construction and Sales of 126 Custom built Villas at Green Oaks, Cherlapally.",

        image: greenOaksImg
      },

      {
        title: "Sree Nivasam",
        location: "Telangana (Piglipur, Abdullapurmet)",
        description: "Scope of work: Design, Construction and Sales of 82 Custom built Villas at Sree Nivasam, Piglipur, Abdullapurmet.",
        metrics: { units: "82 Villas", },
        image: snImg
      },
      {
        title: "TRR Highness Villas",
        location: "Telangana (Yellareddyguda, Kapra)",
        description: "Scope of work:Design and Sales of 46 Villas at TRR Highness Kanishka Villas, Yellareddyguda, Kapra, Hyderabad. ",
        metrics: { units: "46 Villas", },
        image: trrImg
      },
      {
        title: "Botek Factory",
        location: "Telangana (Adibatla, Ibrahimpatnam)",
        description: "Scope of work:Design and Construction of Botek Factory at Adibatla, Ibrahimpatnam.",
        metrics: { units: "1", },
        image: botekImg
      },
    ],
    in_progress: [
      {
        title: "Green Oaks",
        location: "Telangana (Cherlapally)",
        description: "Construction of Villas at Green Oaks Cherlapally.",


      },
      {
        title: "Commercial Building",
        location: "Telangana (Kokapet)",
        description: "Designing of 10 floor commercial building at Kokapet for Harish Reddy.",

      },
      {
        title: "Office Building",
        location: "Telangana",
        description: "Design and construction of G+5 Office building for Cloudernetes IT Solutions",

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
        description: "Design, Construction and Sales of 187 Villas and 2,50,000 sft commercial space.",
        metrics: { units: "187 Villas", type: "Residential" }
      },
      {
        title: "School Building",
        location: "Narayanpet, Telangana",
        description: "Design and Construction of 10,000 sft School Building in 3.6 acres at Narayanpet, Telangana.",
        metrics: { area: "3.6 Acres", type: "Institutional" },


      },
      {
        title: "Residential Apartments",
        location: "Hanumakonda",
        description: "Sales and Marketing of 170 apartments at Hanumakonda.",
        metrics: { units: "170 Apartments", type: "Residential" }
      }
    ]
  };

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <p className="page-eyebrow">Our Portfolio</p>
          <h1 className="page-title">Executed at Scale.<br /> Delivered on Ground.</h1>
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
              activeTab === 'completed' ? (
                <ProjectCard
                  key={index}
                  title={project.title}
                  location={project.location}
                  description={project.description}
                  metrics={project.metrics}
                  image={project.image}
                />
              ) : (
                <ProjectCardDark
                  key={index}
                  title={project.title}
                  location={project.location}
                  description={project.description}
                  metrics={project.metrics}
                />
              )
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
