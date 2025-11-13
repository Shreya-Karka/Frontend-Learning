import { useState, useEffect } from "react";
import "./API.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchUser() {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="user-list">
      <h2>👥 User List</h2>
      <p className="user-count">Total Users: {users.length}</p>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>🏙️ {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
