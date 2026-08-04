import { useState } from 'react';
import './App.css';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
}

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchUser = async () => {
    if (!username) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error('User not found');
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError('User not found. Please check the username and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={searchUser}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {user && (
        <div className="profile-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <h2>{user.name || user.login}</h2>
          <p className="username">@{user.login}</p>
          {user.bio && <p className="bio">{user.bio}</p>}
          <div className="stats">
            <span><strong>{user.followers}</strong> Followers</span>
            <span><strong>{user.following}</strong> Following</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;