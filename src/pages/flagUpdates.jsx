import React from 'react'; // No useState needed!

export default function FlagUpdates() {

  const addFlag = async (e) => {
    e.preventDefault();
    
    // 1. Create FormData from the form element
    const formData = new FormData(e.currentTarget);
    // 2. Get the value by the input's "name" attribute
    const flagName = formData.get('flagName');

    try {
      const response = await fetch(`/api/flags/${flagName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        console.log("Flag added successfully!");
        e.target.reset(); // Native HTML way to clear inputs
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <h1>add flag</h1>
      <form onSubmit={addFlag}>
        {/* 3. Add the 'name' attribute so FormData can find it */}
        <input 
            type="text" 
            name="flagName" 
            placeholder="Flag name" 
        />
        <button type="submit">Add Flag</button>
      </form>
    </section>
  )
}