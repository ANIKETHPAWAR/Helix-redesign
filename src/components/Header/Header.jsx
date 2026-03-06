import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logoHicpl from '../../assets/Logo-hicpl.png'
import Container from '../common/Container/Container'
import Button from '../common/Button/Button'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Container className="site-header-inner">
        <Link to="/" className="brand" aria-label="Helix Group" onClick={closeNav}>
          <img src={logoHicpl} alt="Helix Group" className="brand-logo" />
          {/* <div className="brand-text">
            <span className="brand-title">Helix Group</span>
          </div> */}
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
          <span className="nav-toggle-line"></span>
        </button>

        <nav className={`nav ${isNavOpen ? 'nav--open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/infrastructure"
                className={`nav-link ${isActive('/infrastructure') ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                Helix  Infrastructure
              </Link>
            </li>
            {/* Ecosystem Dropdown */}
            <li className="nav-item-dropdown">
              <div className="nav-link nav-dropdown-trigger">
                Ecosystem
                <svg className="dropdown-arrow" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="nav-dropdown-menu">
                <Link
                  to="/helix360"
                  className="nav-dropdown-item"
                  onClick={closeNav}
                >
                  Helix 360
                </Link>
                <Link
                  to="/laborpro"
                  className="nav-dropdown-item"
                  onClick={closeNav}
                >
                  LaborPro
                </Link>
                <Link
                  to="/aabha-dhwani"
                  className="nav-dropdown-item"
                  onClick={closeNav}
                >
                  Aabha & Dhwani
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nav-link ${isActive('/projects') ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-cta-wrapper">
            <Button to="/contact" variant="primary" onClick={closeNav} className="nav-cta-btn">
              Start a Strategic Discussion <ArrowUpRight size={18} />
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
