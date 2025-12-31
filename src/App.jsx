import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const flagImages = import.meta.glob('./assets/flags/*.png', { eager: true });
const imageUrls = Object.values(flagImages).map(m => m.default);

console.log("All flag data:", flagImages);

// To see just the list of actual image paths (the URLs):
console.log("Image URLs:", Object.values(flagImages).map(m => m.default));

function App() {
  const [count, setCount] = useState(0)

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
        {imageUrls.map((url, index) => (
          <div key={index} className="flag-item">
            <img src={url} alt={`Flag ${index}`} />
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
