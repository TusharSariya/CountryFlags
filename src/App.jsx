import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flag from './flag.jsx'

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
  return (
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
  )
}

export default App
