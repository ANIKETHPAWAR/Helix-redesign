import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../../components/common/SEO/SEO'
import './About.css'

function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const teamMembers = [
    {
      name: "Jagadishwaran G",
      position: "Founder & Managing Director",
      initials: "JG"
    },
    {
      name: "Anusha",
      position: "Founder & Director",
      initials: "A"
    },
    {
      name: "Sabita Reddy",
      position: "Director Training, Skill Development & Capacity Development.",
      initials: "SR"
    },
    {
      name: "ADS Kali Prasad",
      position: "Chief Accountant",
      initials: "AKP"
    },
    {
      name: "Shaalika",
      position: "Specialist Data Mining & Social Media Marketing",
      initials: "S"
    },
    {
      name: "Sai Kumar",
      position: "Head Systems & Web Content Management",
      initials: "SK"
    },
    {
      name: "Bharath S R",
      position: "Head Branding & Content developer",
      initials: "BS"
    }
  ]

  const testimonials = [
    {
      quote: "We have been in the construction industry for quite some time and we collaborated with Helix for the construction of The Park Residency Apartments at Saket Township, Kapra. It is not an exaggeration to say that Helix is the best in the business.Their professional and innovative approach towards design and construction is unique. Beyond that, their efficiency in getting the appropriate funding for the project as well as their noteworthy marketing and sales strategies have indeed delivered results beyond expectations. We are extremely happy with the kind of services helix has delivered and will definitely look forward for future collaborations.",
      author: "Vinod Kasula & NV Sampath",
      role: "Managing Partners - Vin Vin Constructions",

    },
    {
      quote: "Helix Group has been a reliable partner in our real estate ventures. Their structured approach to project planning, execution, and marketing has helped us achieve our goals efficiently. The team at Helix is professional, transparent, and committed to delivering quality results. We appreciate their end-to-end support and look forward to future collaborations.",
      author: "Naman Baldwa",
      role: "Managing Partner – TRR Highness Kanishka Villas",

    },
    {
      quote: "Our collaboration with Helix Group has been deeply impactful. As a charitable trust focused on education, we needed a partner who could understand both our vision and constraints. Helix delivered beyond expectations by efficiently managing the construction of schools and hostels across multiple locations. Their commitment to quality, cost-effectiveness, and timely delivery has helped us create meaningful infrastructure that supports communities. We value their integrity and dedication to purpose-driven projects.",
      author: "Josh",
      role: "Representative – OM Books (Charitable Trust)",

    },
    {
      quote: "Helix Group played a pivotal role in positioning Home Town Heights as a premium residential project in the market. As our exclusive marketing partner, they brought in strategic clarity, strong branding, and a results-driven approach that significantly boosted our sales performance. Their understanding of the luxury segment and buyer psychology gave us a competitive edge. The professionalism and dedication of their team made the entire journey smooth and highly successful.",
      author: "Anand Bhashyakarla",
      role: "Managing Partner – Home Town Heights",

    },
    {
      quote: "Helix Group has been a key partner in shaping the success of Sree Nivasam Villas. Their support in designing and planning the villas laid a strong foundation for the project. Since our model is to construct villas based on customer bookings, their team ensured flexibility in execution while maintaining quality standards. What truly made a difference was their strong involvement in driving sales — their strategic approach and market understanding helped us generate consistent bookings. Helix brought both structure and momentum to our project.",
      author: "Boga Prabhakar",
      role: "Founder & CEO – Sree Nivasam Villas",

    },
    {
      quote: "I was looking to invest in real estate and buy an apartment that was close to the city but away from the chaos of the city. That’s when I found Helix. After my association with Helix, I was surprised with their approach to whole deal, absolute transparency in transactions, real time support and assistance to their clients is their biggest strength.I was able to buy the apartment with so much ease and practically no hassle. Thank you Helix, for helping me buy this beautiful home",
      author: "Mr Jayaprakash Ramasubramaniam",
      role: "Service Manager - Mahindra & Mahindra Automotive",

    },
    {
      quote: "Helix has definitely redefined my perception about buying real estate. I never knew that buying an apartment was so easy with their transparent and practical approach to assist me with the transactions. Helix is definitely ahead of the curve. Thanks a lot.",
      author: "Srinivas Sarma",
      role: "Production Manager - Akums Drugs",

    },
    {
      quote: "Working with the whole team of Helix was a great experience! You put yourself in the hands of these brilliant professionals and they go about doing their job superbly. At the other side of the experience you’re left in a calm, relaxed state. Great marketing strategies and exceptional sales.  No hassle, no need to worry about any of the details as everything is taken care of. Expert guidance; great customer care; awesome marketing.We look forward to many more associations with Helix in the future.",
      author: "Srinivas & Gyaneshwar",
      role: "Directors - Harini Mansion Pvt Ltd",

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
      <SEO
        title="About Helix Group | Real Estate Consulting Company Hyderabad"
        description="Learn about Helix Group — a leading B2B real estate development consulting and delivery organization in Hyderabad, India. Meet our team of engineering and project management experts."
        keywords="about helix group, real estate consulting company Hyderabad, construction consulting team India, B2B real estate advisory firm, real estate project management company"
        canonicalPath="/about"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Helix Group",
          "description": "Learn about Helix Group's team, history, and mission in real estate development consulting.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Helix Group",
            "foundingLocation": "Hyderabad, Telangana, India"
          }
        }}
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="page-eyebrow">About Helix</p>
          <h1 className="page-title">Helix Philosophy</h1>
          <p className="page-subtitle">
            Helix was built on a simple belief: real estate projects succeed when they are structured well from the beginning. Many developments struggle not because of lack of opportunity, but because of fragmented planning, unclear responsibilities, and uncoordinated execution. Helix was created to bring structure and accountability across the development lifecycle. Our approach integrates development structuring, engineering governance, coordinated execution, workforce systems, and project marketing into a single disciplined framework. We work selectively with partners who value clarity, reliability, and long-term reputation in project delivery.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Disciplined professionals governing real estate development and structured execution.
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
