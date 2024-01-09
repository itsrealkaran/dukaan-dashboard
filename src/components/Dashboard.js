// Navbar.js
import React from "react";

const navbarStyle = {
  backgroundColor: "#2ecc71",
  color: "#fff",
  padding: "20px",
  textAlign: "left",
  height: "100%",
  width: "20%",
  display: "flex",
  flexDirection: "column",
};

const listItemStyle = {
  marginBottom: "10px",
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      {/* Your navbar content goes here */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={listItemStyle}>Dashboard</li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
