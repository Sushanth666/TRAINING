import React from "react";
import "./UserCard.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="profile">
        {user.name.charAt(0)}
      </div>

      <h2>{user.name}</h2>

      <div className="info">
        <p><span>Age:</span> {user.age}</p>
        <p><span>Role:</span> {user.role}</p>
        <p><span>Location:</span> {user.city}</p>
        <p><span>Contact:</span> {user.contact}</p>
      </div>
    </div>
  );
}

export default UserCard;