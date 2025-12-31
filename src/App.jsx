import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const flagImages = import.meta.glob('./assets/flags/*.png', { eager: true });
const imageUrls = Object.values(flagImages).map(m => m.default);

// To see just the list of actual image paths (the URLs):
console.log("Image URLs:", Object.values(flagImages).map(m => m.default));

const flags = Object.entries(flagImages).map(([path, module]) => {
  const fileName = path.split('/').pop().replace('.png', '');
  return {
    url: module.default,
    name: fileName.replace(/-/g, ' ').toUpperCase(),
    description: `This is the official flag of ${fileName.replace(/-/g, ' ')}.`
  };
});

console.log("Flags Data:", flags);

function App() {
  const [count, setCount] = useState(0)
  const [selectedFlag, setSelectedFlag] = useState(null);

  if (selectedFlag) {
    return (
      <div className="flag-detail" onClick={() => setSelectedFlag(null)}>
        <img src={selectedFlag.url} alt={selectedFlag.name} />
        <h1>{selectedFlag.name}</h1>
        <p>{selectedFlag.description}</p>
        <button onClick={() => setSelectedFlag(null)}>Close</button>
      </div>
    );
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="flag-grid">
        {flags.map((flag, index) => (
          <div key={index} className="flag-item" onClick={() => setSelectedFlag(flag)}>
            <img src={flag.url} alt={`Flag ${flag.name}`} />
          </div>
        ))}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
