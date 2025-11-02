import React from "react";

function Icon({ alt, src, href }) {
  return (
    <div className="icon" style={{ display: "inline-block", margin: "0 10px" }}>
      <a href={href}>
        <img
          src={src}
          alt={alt}
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
      </a>
    </div>
  );
}

export default Icon;
