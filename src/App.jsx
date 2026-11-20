import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const AESTHETIC_CAPTIONS = [
  "solo quiero dormir todo el día...",
  "vibra de domingo por la tarde",
  "mirando la nada, pensando en todo",
  "2014 soft grunge cat aesthetic",
  "un cafecito y un michi"
];

const TAG_SETS = [
  ['catcore', 'aesthetic', 'soft'],
  ['michis', 'tumblr2014', 'vibes'],
  ['grumpy', 'mood', 'photography'],
  ['cute', 'lofi', 'chill']
];

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Requisito 4: Consumo de API externa en App.jsx con fetch, useEffect y console.log
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=15')
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos obtenidos de The Cat API:", data);
        
        const formatted = data.map((item, idx) => ({
          id: item.id,
          url: item.url,
          caption: AESTHETIC_CAPTIONS[idx % AESTHETIC_CAPTIONS.length],
          tags: TAG_SETS[idx % TAG_SETS.length],
          notes: Math.floor(Math.random() * 900) + 50
        }));
        
        setCats(formatted);
        setLoading(false);
      })
      .catch((error) => console.error("Error al consumir la API:", error));
  }, []);

  return (
    <BrowserRouter>
      <Header onSearch={setSearchTerm} />
      <Routes>
        <Route 
          path="/" 
          element={<Home cats={cats} loading={loading} searchTerm={searchTerm} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;