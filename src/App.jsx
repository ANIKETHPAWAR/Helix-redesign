import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Infrastructure from './pages/Infrastructure/Infrastructure'
import Helix360 from './pages/Helix360/Helix360'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="helix360" element={<Helix360 />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
