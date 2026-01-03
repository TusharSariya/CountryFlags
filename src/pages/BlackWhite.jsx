import { useState } from 'react';

export default function blackWhite() {

    const [white, setWhite] = useState(false);
  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: white ? '#ffffff' : '#000000', color: white ? '#000000' : '#ffffff' }} onClick={() => setWhite(prev => !prev)}>
      <h1>click on page to change color</h1>
    </div>
  );
}