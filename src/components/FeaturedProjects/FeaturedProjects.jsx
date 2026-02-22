import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container/Container';
import { ProjectCard } from '../common/Card/Card';
import './FeaturedProjects.css';

import hariniImg from '../../assets/Harini-Mansion-Medipally-Hyd.png';
import homeTownImg from '../../assets/Home-Town-Heights-Yapral, Hyd.png';
import parkResidencyImg from '../../assets/The-Park-Residency-Saket-Township- Hyd.png';

const FeaturedProjects = () => {
    // Data from the user request
    const projects = [
        {
            title: "Harini Mansion",
            location: "Medipally, Hyderabad",
            description: "Scope of work: Design, Construction and Sales of 61 Villas in 4 acres totalling to 1,24,507 Sq. Ft.",
            metrics: {
                units: "61 Villas",
                area: "4 Acres"
            },
            image: hariniImg
        },
        {
            title: "Vayun Meadows",
            location: "Yapral, Hyderabad",
            description: "Scope of work: Design, Construction and Sales of 50 Apartments in 2500 Sq.Yds totalling to 79,670 Sq. Ft.",
            metrics: {
                units: "50 Apts",
                area: "2500 Sq.Yds"
            },
            image: homeTownImg
        },
        {
            title: "The Park Residency Apartments",
            location: "Saket Township, Hyderabad",
            description: "Scope of work: Design, Construction and Sales of 25 Apartments in 1500 Sq.Yds totalling to 66,825 Sq. Ft.",
            metrics: {
                units: "25 Apts",
                area: "1500 Sq.Yds"
            },
            image: parkResidencyImg
        }
    ];

    return (
        <section className="featured-projects-section">
            <Container>
                <div className="featured-projects-header">
                    <h2 className="featured-projects-title">Featured Projects</h2>
                    <Link to="/projects" className="view-all-link">
                        View All Projects &rarr;
                    </Link>
                </div>
                <div className="featured-projects-grid">
                    {projects.map((project, index) => (
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
            </Container>
        </section>
    );
};

export default FeaturedProjects;
