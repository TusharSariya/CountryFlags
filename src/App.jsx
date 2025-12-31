import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
  const [allFlags, setAllFlags] = useState(initialFlags)
  const [selectedUrl, setSelectedUrl] = useState(null);

  const selectedFlag = allFlags.find(flag => flag.url === selectedUrl);
  
  const updateFlag = (field, value) => {
    setAllFlags(prev => prev.map(flag => flag.url === selectedUrl ? { ...flag, [field]: value } : flag));
  };

  

  if (selectedUrl) {
    return (
      <div className="flag-detail">
        <img src={selectedFlag.url} alt={selectedFlag.name} />
        <div className="edit-inputs">
          <input 
            type="text" 
            value={selectedFlag.name} 
            onChange={(e) => updateFlag('name', e.target.value)}
            placeholder="Country Name"
          />
          <textarea 
            value={selectedFlag.description} 
            onChange={(e) => updateFlag('description', e.target.value)}
            placeholder="Description"z
          />
        </div>
        <button onClick={() => setSelectedUrl(null)}>Save & Close</button>
      </div>
    );
  }


  return (
    <>
      <h1>Country Flags</h1>

      <div className="flag-grid">
        {initialFlags.map((flag, index) => (
          <div key={index} className="flag-item" onClick={() => setSelectedUrl(flag.url)}>
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
