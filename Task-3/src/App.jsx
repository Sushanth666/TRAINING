import React, { useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const users = [
    {
      id: 1,
      name: "Ram",
      age: 22,
      city: "Coimbatore",
      role: "Frontend Developer",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Arjun",
      age: 24,
      city: "Chennai",
      role: "React Developer",
      contact: "9876543211",
    },
    {
      id: 3,
      name: "Priya",
      age: 23,
      city: "Hyderabad",
      role: "UI Designer",
      contact: "9876543212",
    },
    {
      id: 4,
      name: "Karthik",
      age: 25,
      city: "Bangalore",
      role: "Software Engineer",
      contact: "9876543213",
    },
    {
      id: 5,
      name: "Divya",
      age: 21,
      city: "Mumbai",
      role: "Frontend Intern",
      contact: "9876543214",
    },
  ];

  return (
    <div className="app">
      <h1>Conditional Rendering & List Rendering</h1>

      <div className="auth-section">
        {isLoggedIn ? (
          <>
            <h2>Welcome Back, Sree Sushanth 👋</h2>
            <button onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h2>Please Login to Continue</h2>
            <button onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          </>
        )}
      </div>

      {isLoggedIn && (
        <div className="card-container">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;