// Main.js
import React from "react";
import Dashboard from "./Dashboard"; // Import your actual dashboard component

const mainStyle = {
  padding: "20px",
};

const Main = () => {
  return (
    <main style={mainStyle}>
      {/* Your main content goes here */}
      <Dashboard />
    </main>
  );
};

export default Main;
