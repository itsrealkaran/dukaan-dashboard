// App.js
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const appStyle = {
  display: "flex",
  flexDirection: "row", // Align components in a row
  height: "100vh",
};

const navbarStyle = {
  display: "flex",
  width: "16vw", // Set the navbar width to 20%
};

const contentContainerStyle = {
  display: "flex",
  width: "84vw",
  flexDirection: "column", // Display header and main in a column
};

const App = () => {
  return (
    <div style={appStyle}>
      <div style={navbarStyle}>
        <Navbar />
      </div>
      <div style={contentContainerStyle}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
