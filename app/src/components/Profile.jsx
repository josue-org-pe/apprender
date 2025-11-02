import React from "react";

function Profile({ imgProfileSrc, username }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "0 20px",
      }}
    >
      <div>
        <img
          src={imgProfileSrc || "https://via.placeholder.com/40"}
          alt="Img_profile"
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
      </div>
      <div>
        <h3 style={{ margin: 0 }}>{username || "Invitado"}</h3>
      </div>
    </div>
  );
}

export default Profile;
