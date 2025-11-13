import { useState } from "react";
import "./UserListFilter.css";

function UserListFilter() {
  const [users] = useState([
    { id: 1, name: "Shreya", role: "Developer", age: 25 },
    { id: 2, name: "Alex", role: "Designer", age: 28 },
    { id: 3, name: "Maria", role: "Developer", age: 30 },
    { id: 4, name: "John", role: "Designer", age: 26 },
    { id: 5, name: "Sarah", role: "Developer", age: 27 },
  ]);

  const [filter, setFilter] = useState("All");

  // TODO: Filter users based on current filter
  const filteredUsers =
    filter === "All" ? users : users.filter((user) => user.role === filter);

  return (
    <div className="user-list-filter">
      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All ({users.length})</button>
        <button onClick={() => setFilter("Developer")}>Developers</button>
        <button onClick={() => setFilter("Designer")}>Designers</button>
      </div>

      <p>Showing {filteredUsers.length} users</p>

      {filteredUsers.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>
            {user.role} - Age {user.age}
          </p>
        </div>
      ))}

      {/* TODO: Map through filteredUsers and display each user */}
    </div>
  );
}

export default UserListFilter;
