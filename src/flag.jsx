export default function Flag({ image, name, description }) {
  return (
    <div style={{ width: '200px',border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center', margin: '10px' }}>
      <img 
        src={image} 
        alt={name} 
        style={{ maxWidth: '150px', height: 'auto', border: '1px solid #eee' }} 
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}