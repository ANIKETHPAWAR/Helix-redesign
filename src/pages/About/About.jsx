import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './About.css'

function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      initials: "RK"
    },
    {
      name: "Priya Sharma",
      position: "Chief Operating Officer",
      initials: "PS"
    },
    {
      name: "Anil Reddy",
      position: "Head of Engineering",
      initials: "AR"
    },
    {
      name: "Meera Patel",
      position: "Project Director",
      initials: "MP"
    },
    {
      name: "Vikram Singh",
      position: "Business Development Head",
      initials: "VS"
    },
    {
      name: "Sneha Iyer",
      position: "Marketing Director",
      initials: "SI"
    }
  ]

  const testimonials = [
    {
      quote: "Helix Group transformed our vision into reality. Their end-to-end accountability and execution excellence set them apart from traditional consultants.",
      author: "Harini Mansion Development",
      role: "Real Estate Developer",
      project: "61 Villas Project"
    },
    {
      quote: "Working with Helix was a game-changer. They didn't just design our project—they delivered it with precision and stayed accountable throughout.",
      author: "Vayun Meadows",
      role: "Project Owner",
      project: "50 Apartments Development"
    },
    {
      quote: "The integrated approach of Helix Group ensured our project stayed on schedule and within budget. Their expertise in both engineering and execution is unmatched.",
      author: "The Park Residency",
      role: "Developer",
      project: "25 Apartments Project"
    },
    {
      quote: "Helix's commitment to quality and their ability to manage complex projects from concept to completion has made them our trusted partner.",
      author: "SRJ Constructions",
      role: "Construction Partner",
      project: "Multiple Projects"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="premium-gradient-bg">
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

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the experts driving excellence in real estate development and execution.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-inner">
                  <div className="team-avatar">
                    <span className="avatar-initials">{member.initials}</span>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">
              What our clients say about working with Helix Group.
            </p>
          </div>

          <div className="testimonials-carousel">
            <div className="carousel-container">
              <button
                className="carousel-button prev"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonials[currentTestimonial].author}</p>
                  <p className="author-role">{testimonials[currentTestimonial].role}</p>
                  <p className="author-project">{testimonials[currentTestimonial].project}</p>
                </div>
              </div>

              <button
                className="carousel-button next"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
