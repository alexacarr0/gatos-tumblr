import { useState } from 'react';

export default function CatCard({ cat }) {
  const [liked, setLiked] = useState(false);
  const [notes, setNotes] = useState(cat.notes);

  const toggleLike = () => {
    setLiked(!liked);
    setNotes(liked ? notes - 1 : notes + 1);
  };

  return (
    <div style={{ background: '#ffffff', color: '#222', borderRadius: '6px', marginBottom: '20px', breakInside: 'avoid', overflow: 'hidden' }}>
      <img src={cat.url} alt="michi aesthetic" style={{ width: '100%', display: 'block' }} />
      
      <div style={{ padding: '12px' }}>
        <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>{cat.caption}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
          {cat.tags.map((tag, i) => (
            <span key={i} style={{ fontSize: '0.75rem', color: '#666' }}>#{tag}</span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '8px', fontSize: '0.8rem', color: '#555' }}>
          <span>{notes} notas</span>
          <button 
            onClick={toggleLike}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: liked ? '#ff492f' : '#888' }}
          >
            {liked ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
}