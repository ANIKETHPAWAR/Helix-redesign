import './Home.css'
import { ArrowUpRight } from 'lucide-react';
import SEO from '../../components/common/SEO/SEO';
import Section from '../../components/common/Section/Section'
import Container from '../../components/common/Container/Container'
import Button from '../../components/common/Button/Button'
import { FeatureCard } from '../../components/common/Card/Card'
import ProofStatements from '../../components/ProofStatements/ProofStatements'
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel'
import IntegratedApproach from '../../components/IntegratedApproach/IntegratedApproach'
import FrameworkSection from '../../components/FrameworkSection/FrameworkSection'
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects'
import ClientsSection from '../../components/ClientsSection/ClientsSection'
import ServicesShowcase from '../../components/ServicesShowcase/ServicesShowcase'
import EcosystemSnapshot from '../../components/EcosystemSnapshot/EcosystemSnapshot'
import HelixDevelopmentFramework from '../../components/HelixDevelopmentFramework/HelixDevelopmentFramework'
import MetricsBanner from '../../components/MetricsBanner/MetricsBanner'

// Icons for Problem Section
const Icons = {
  Drawing: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Alert: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.29 3.86L1.82 18C1.64538 18.3024 1.55296 18.6453 1.55196 18.9945C1.55096 19.3437 1.64142 19.6871 1.81443 19.9905C1.98744 20.2939 2.23696 20.5467 2.53846 20.7239C2.83996 20.901 3.18318 20.9962 3.535 21H20.465C20.8168 20.9962 21.16 20.901 21.4615 20.7239C21.763 20.5467 22.0126 20.2939 22.1856 19.9905C22.3586 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56613 13.2807 3.32314 12.9812 3.15449C12.6817 2.98585 12.3437 2.89722 12 2.89722C11.6563 2.89722 11.3183 2.98585 11.0188 3.15449C10.7193 3.32314 10.4683 3.56613 10.29 3.86V3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  TrendUp: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Leak: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.92993 4.92999L19.0699 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Home() {
  return (
    <>
      <SEO
        title="Real Estate Development Consulting | Integrated Construction Consulting India"
        description="Helix Group delivers integrated real estate development consulting, engineering governance, construction project management, and project marketing under one accountable framework in India."
        keywords="real estate development consulting, integrated construction consulting India, real estate project advisory services, project management consultancy real estate, real estate development solutions Hyderabad"
        canonicalPath="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Helix Group",
          "alternateName": "Helix Infrastructure Consultants Pvt Ltd",
          "url": "https://hicpl.com",
          "logo": "https://hicpl.com/favicon.jpg",
          "description": "Integrated real estate development consulting and construction project management company in Hyderabad, India.",
          "foundingDate": "2015",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot No.101/109A, Phase 3, Saket Township, Kapra, ECIL Post",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500062",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.linkedin.com/company/helix-infrastructure-consultants-p-ltd/",
            "https://www.instagram.com/helix_hyderabad/",
            "https://www.facebook.com/HelixInfra",
            "https://x.com/Helix_Infra"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Helix Group Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Helix Infrastructure - Development Advisory & Project Management" }},
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Helix 360 - Integrated Finishing & MEP Execution" }},
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LaborPro - Construction Workforce Management" }},
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aabha & Dhwani - Brand Strategy & Marketing" }}
            ]
          }
        }}
      />
      {/* Hero Section */}
      <div className="hero-section">
        <HeroCarousel>
          <Container>
            <div className="hero-content">
              <h1 className="hero-title">
                Structured Projects.<br />
                Predictable Delivery.
              </h1>
              <p className="hero-subtitle">
                Helix integrates development structuring, engineering governance, coordinated execution, workforce deployment, and project marketing into one accountable framework for real estate development.
              </p>

              <div className="hero-cta-group">
                <Button to="/contact" variant="primary">
                  Start a Strategic Discussion
                </Button>
                <Button to="/infrastructure" variant="secondary">
                  Explore Our Framework
                </Button>
              </div>
            </div>
          </Container>
        </HeroCarousel>
      </div>

      {/* Metrics Banner — compact stats strip */}
      <MetricsBanner />
      {/* <IntegratedApproach /> */}
      {/* Clear Differentiator Section */}
      <ServicesShowcase />
      <HelixDevelopmentFramework />
      <ClientsSection />
      <ProofStatements />
      {/* Integrated Approach Section */}
      {/*  */}

      {/* Services Showcase Section */}


      {/* Problem Section */}
      {/* <Section id="problems">
        <div className="header-center mb-xl">
          <h2 className="section-title">Why Projects Fail - Even with Good Consultants</h2>
        </div>
        <div className="grid-responsive">
          <FeatureCard
            icon={<Icons.Drawing />}
            title="Advice stops at drawings"
            description="Consultants provide designs but lack skin in the game during execution."
          />
          <FeatureCard
            icon={<Icons.Alert />}
            title="Execution drifts on site"
            description="Contractors misinterpret details leading to quality dilution."
          />
          <FeatureCard
            icon={<Icons.TrendUp />}
            title="Costs escalate late"
            description="Unforeseen changes during construction blow up budgets."
          />
          <FeatureCard
            icon={<Icons.Leak />}
            title="Post-plaster leakage"
            description="Finishing stages cause maximum timeline and cost overruns."
          />
        </div>


        {/* Closing Highlight Statement */}
      {/* <div className="bridge-statement-bar" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <Container>
          <p className="highlight-text">
            Helix was built to close this gap — <span className="text-highlight">by staying accountable till delivery.</span>
          </p>
        </Container>
      </div>
    </Section > */
      }



      {/* Proof / Credibility */}


      {/* Ecosystem Snapshot */}


      {/* Helix Development Framework (Visual Timeline) */}


      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* framework section */}
      <FrameworkSection />

      {/* Clients Marquee Section */}


      {/* Bottom CTA */}
      < Section className="cta-section" >
        <div className="cta-box">
          <div className="cta-content">
            <h2>Who We Work With</h2>
            <p>Helix collaborates with developers and landowners who value structured execution and disciplined growth. We typically partner with:</p>
            <ul className="cta-list">
              <li>◈ Landowners exploring structured development</li>
              <li>◈ Emerging and mid-sized developers</li>
              <li>◈ Established developers expanding into new projects</li>
              <li>◈ Investors seeking disciplined project execution</li>
            </ul>
          </div>
          <div className="cta-actions">
            <Button to="/contact" variant="primary">
              Start a Strategic Discussion <ArrowUpRight size={24} />
            </Button>
          </div>
        </div>
      </Section >
    </>
  )
}

export default Home
