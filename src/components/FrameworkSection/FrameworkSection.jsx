import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './FrameworkSection.css';
import Container from '../common/Container/Container';
import Button from '../common/Button/Button';
import constructionImg from '../../assets/d-1.png'; // Using existing construction image as placeholder

const FrameworkSection = () => {
    return (
        <section className="framework-section">
            <Container>
                <div className="framework-grid">
                    {/* Left Content */}
                    <div className="framework-content">
                        <span className="framework-label">Our Approach</span>
                        <h2 className="framework-title">
                            One Framework.<br />
                            End-to-End<br />
                            Accountability.
                        </h2>
                        <p className="framework-desc">
                            Helix integrates development structuring, engineering governance, coordinated execution, and project marketing under one accountable framework for real estate.
                        </p>

                        <div className="framework-quote">
                            "Helix structures every engagement for predictable, governed delivery."
                        </div>

                        <Button to="/contact" variant="primary" className="framework-btn">
                            Start a Strategic Discussion <ArrowUpRight size={18} />
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div className="framework-image-wrapper">
                        <div className="framework-deco-top"></div>
                        <div className="framework-img" style={{ backgroundImage: `url(${constructionImg})` }}></div>
                        <div className="framework-deco-bottom"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FrameworkSection;
