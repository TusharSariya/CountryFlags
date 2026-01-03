import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flag from './flag.jsx'
import About from './pages/About.jsx'

const flagImages = import.meta.glob('./assets/flags/*.png', { eager: true });
const imageUrls = Object.values(flagImages).map(m => m.default);

// To see just the list of actual image paths (the URLs):
console.log("Image URLs:", Object.values(flagImages).map(m => m.default));

const initialFlags = Object.entries(flagImages).map(([path, module]) => {
  const fileName = path.split('/').pop().replace('.png', '');
  return {
    url: module.default,
    name: fileName.replace(/-/g, ' ').toUpperCase(),
    description: `This is the official flag of ${fileName.replace(/-/g, ' ')}.`
  };
});

console.log("Flags Data:", initialFlags);

function App() {

  const [healthStatus, setHealthStatus] = useState('checking...');
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log("Checking backend health...");
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setHealthStatus(data.status))
      .catch(err => {
        console.error("Backend unreachable:", err);
        setHealthStatus('offline');
      });
  }, []);

  return (
    <div onClick={() => setClickCount(prev => prev + 1)} style={{ minHeight: '100vh' }}>
      <Router>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <div style={{ fontSize: '0.8rem', color: healthStatus === 'healthy' ? 'green' : 'red' }}>
            Backend: {healthStatus} | Clicks: {clickCount}
          </div>
          <img src={viteLogo} className="vite-logo" alt="Vite logo" />
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <h1>Country Flags</h1>
              <div className="flag-grid">
                {initialFlags.map((flag, index) => (
                  <Flag 
                    key={index}
                    image={flag.url}
                    name={flag.name}
                    description={flag.description}
                  />
                ))}
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          } />
          
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
