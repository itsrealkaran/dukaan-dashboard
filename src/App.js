// App.js
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const appStyle = {
  display: "flex",
  flexDirection: "row", // Align components in a row
  height: "100vh",
  background: "#FAFAFA",
};

const navbarStyle = {
  display: "flex",
  flex: "1 1 16%",
};

const contentContainerStyle = {
  display: "flex",
  flex: "1 1 84%",
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
