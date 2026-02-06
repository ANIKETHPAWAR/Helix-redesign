import React from 'react';
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
                            Helix Group is a B2B consulting and delivery organisation combining engineering,
                            project management, execution, and go-to-market capability under one accountable framework.
                        </p>

                        <div className="framework-quote">
                            "We don't just design projects. We build what we design."
                        </div>

                        <Button to="/process" variant="primary" className="framework-btn">
                            Learn About Our Process
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
