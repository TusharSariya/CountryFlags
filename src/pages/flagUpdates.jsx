import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function FlagUpdates() {
  const [nameToAdd, setNameToAdd] = useState('');
  const [nameToRemove, setNameToRemove] = useState('');

  const addFlag = async (e) => {
    e.preventDefault();
    
    try {
      // Send POST request to your Flask backend
      // The URL matches your @app.route('/api/flags/<flag_id>')
      const response = await fetch(`/api/flags/${nameToAdd}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        console.log("Flag added successfully!");
        setNameToAdd(''); // Clear the input
      } else {
        console.error("Failed to add flag");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const removeFlag = (e) => {
    e.preventDefault();
    console.log("Remove logic would go here");
  };

    return (
        <>
            <section>
                <h1>add flag</h1>
                <form onSubmit={addFlag}>
                    <input 
                        type="text" 
                        placeholder="Flag name" 
                        value={nameToAdd}
                        onChange={(e) => setNameToAdd(e.target.value)}
                    />
                    <button type="submit">Add Flag</button>
                </form>
            </section>
            <section>
                <h1>remove flag</h1>
                <form onSubmit={removeFlag}>
                    <input 
                        type="text" 
                        placeholder="Flag name" 
                        value={nameToRemove}
                        onChange={(e) => setNameToRemove(e.target.value)}
                    />
                    <button type="submit">Remove Flag</button>
                </form>
            </section>
        </>
    )
}