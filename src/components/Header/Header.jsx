import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const location = useLocation()

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
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="brand" aria-label="Helix Group" onClick={closeNav}>
          <div className="brand-mark">H</div>
          <div className="brand-text">
            <span className="brand-title">Helix Group</span>
            <span className="brand-subtitle">Consult · Design · Build · Deliver</span>
          </div>
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
                Infrastructure
              </Link>
            </li>
            <li>
              <Link 
                to="/helix360" 
                className={`nav-link ${isActive('/helix360') ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                Helix 360
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
                to="/projects" 
                className={`nav-link ${isActive('/projects') ? 'nav-link--active' : ''}`}
                onClick={closeNav}
              >
                Projects
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
          <Link to="/contact" className="nav-cta" onClick={closeNav}>
            Talk to our team
            <span>→</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
