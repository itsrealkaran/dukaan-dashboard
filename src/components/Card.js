// Card.js
import React from "react";

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "0.375rem",
  padding: "1.5rem",
  flex: "1 0 300px", // Allow cards to shrink on smaller screens
  boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
};

const headingStyle = {
  fontSize: "0.875rem",
  opacity: "0.8",
};

const valueStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginTop: "0.5rem",
};

const Card = ({ heading, value }) => {
  return (
    <div style={cardStyle}>
      <div style={headingStyle}>{heading}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );
};

export default Card;
