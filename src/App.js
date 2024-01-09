// App.js
import React, { useEffect, useState } from "react";
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
  flex: "0 0 16%",
};

const contentContainerStyle = {
  display: "flex",
  flex: "1",
  overflowY: "auto",
  flexDirection: "column", // Display header and main in a column
};

const App = () => {
  const [smallScreen, setSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.screen.width);
      setSmallScreen(window.screen.width > 780);
    };
    // Initial check on component mount
    handleResize();
    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={appStyle}>
      {smallScreen ? (
        <div style={navbarStyle}>
          <Navbar />
        </div>
      ) : null}
      <div style={contentContainerStyle}>
        <Header smallScreen />
        <Main />
      </div>
    </div>
  );
};

export default App;
