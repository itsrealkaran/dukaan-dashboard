import React from "react";

const NavbarStyle = {
  backgroundColor: "#2ecc71",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
};

const listItemStyle = {
  marginBottom: "10px",
};

const Navbar = () => {
  return (
    <nav style={NavbarStyle}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={listItemStyle}>Dashboard</li>
      </ul>
    </nav>
  );
};

export default Navbar;
