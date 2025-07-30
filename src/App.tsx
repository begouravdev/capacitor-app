import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import StorePage from './pages/StorePage'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <div>
          <header className="main-header">
            <h1>My Capacitor App</h1>
          </header>
        </div>
        <nav className="nav-link">
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
          <Link to="/contact">Contact</Link> | <Link to="/store">Store</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<StorePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
