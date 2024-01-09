// Header.js
import React from "react";
import {
  DropdownIcon,
  FeedbackIcon,
  QuestionMarkIcon,
  SearchIcon,
} from "./Icons"; // Import your Icons component

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  color: "#000",
  padding: "0.75rem 2rem",
  gap: "1rem",
  borderBottom: "1px solid #D9D9D9",
};

const paymentInfoStyle = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  gap: "1rem",
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.375rem",
};

const paymentTextsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
};

const howItWorksStyle = {
  fontSize: "0.75rem",
  lineHeight: "1rem",
  opacity: "0.8",
};

const searchContainerStyle = {
  backgroundColor: "#f2f2f2",
  borderRadius: "0.375rem",
  padding: "0.5625rem 1rem",
  gap: "0.5rem",
  display: "flex",
  flex: 1,
  alignItems: "center",
};

const searchBoxStyle = {
  border: "none",
  background: "transparent",
  color: "#808080",
  fontSize: "0.9375rem",
  outline: "none",
  flex: 1,
};

const circularButtonContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "0.75rem",
  flex: 1,
};

const circularButtonStyle = {
  backgroundColor: "#2ecc71",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Header = () => {
  return (
    <header style={headerStyle}>
      {/* First Div */}
      <div style={paymentInfoStyle}>
        <div>Payments</div>
        <div style={paymentTextsStyle}>
          <QuestionMarkIcon />
          <div style={howItWorksStyle}>How it works</div>
        </div>
      </div>

      {/* Second Div */}
      <div style={searchContainerStyle}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          style={searchBoxStyle}
        />
      </div>

      {/* Third Div */}
      <div style={circularButtonContainerStyle}>
        <div style={circularButtonStyle}>
          <FeedbackIcon />
        </div>
        <div style={circularButtonStyle}>
          <DropdownIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
