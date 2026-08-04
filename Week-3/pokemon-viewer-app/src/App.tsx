import { useState } from 'react';
import './App.css';

// TypeScript interface for Pokémon Data
interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPokemon = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError('');
    setPokemon(null);

    try {
      // Fetching data from PokéAPI
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      
      if (!response.ok) {
        throw new Error('Pokémon not found! Please check the spelling.');
      }
      
      const data = await response.json();
      setPokemon(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Pokémon Viewer</h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Pokémon (e.g., pikachu)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchPokemon()}
          />
          <button onClick={fetchPokemon}>Search</button>
        </div>

        {/* Loading State */}
        {loading && <p className="loading">Catching Pokémon...</p>}
        
        {/* Error State */}
        {error && <p className="error">{error}</p>}

        {/* Pokémon Details */}
        {pokemon && (
          <div className="pokemon-details">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>{pokemon.name.toUpperCase()}</h2>
            
            <div className="stats">
              <p><strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
              <p><strong>Height:</strong> {pokemon.height / 10} m</p>
              <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;