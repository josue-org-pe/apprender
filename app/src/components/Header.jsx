import React from "react";
import Icon from "./Icon.jsx";
import Profile from "./Profile.jsx";

function Header({ user }) {
  return (
    <header
      style={{
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ margin: 0, color: "#007bff" }}>ÑAM</h1>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon alt="Teaching" src="/icons/teaching.png" href="#" />
          <Icon alt="Gym" src="/icons/gym.png" href="#" />
          <Icon alt="Courses" src="/icons/courses.png" href="#" />
          <Icon alt="Materials" src="/icons/materials.png" href="#" />
          <Icon alt="Home" src="/icons/home.png" href="#" />
        </div>
        <Profile
          imgProfileSrc={user?.img || "https://via.placeholder.com/40"}
          username={user?.name || "Usuario"}
        />
      </div>
    </header>
  );
}

export default Header;
