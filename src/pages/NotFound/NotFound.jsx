import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Page Not Found | Helix Group</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-link">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
