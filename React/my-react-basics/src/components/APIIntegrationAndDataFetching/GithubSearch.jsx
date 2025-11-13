import { useState, useEffect } from "react";
import "./API.css";

function GithubSearch() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("octocat");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username.trim()) {
      setUser(null);
      return;
    }
    setLoading(true);
    setError(null);
    const timerId = setTimeout(() => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.status === 404) {
            throw new Error("User not found");
          }
          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }
          return response.json();
        })
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
          setUser(null);
        });
    }, 500);

    return () => clearTimeout(timerId);
  }, [username]);

  return (
    <div className="github-search">
      <h2>🔍 GitHub User Search</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="search-input"
      />

      {loading && <p>Searching...</p>}
      {error && <p className="error">{error}</p>}

      {user && !loading && (
        <div className="user-profile">
          <img src={user.avatar_url} alt={user.name} className="avatar" />
          <h3>{user.name || user.login}</h3>
          <p className="username">@{user.login}</p>
          {user.bio && <p className="bio">{user.bio}</p>}

          <div className="stats">
            <div className="stat">
              <strong>{user.followers}</strong>
              <span>Followers</span>
            </div>
            <div className="stat">
              <strong>{user.following}</strong>
              <span>Following</span>
            </div>
            <div className="stat">
              <strong>{user.public_repos}</strong>
              <span>Repos</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubSearch;
