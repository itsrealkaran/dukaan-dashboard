// Navbar.js
import React from "react";
import { MyProjectsIcon, DropdownIcon, CreditIcon } from "./Icons"; // Import your Icons component

const navbarStyle = {
  backgroundColor: "#1E2640",
  color: "#fff",
  padding: "1rem 0.6rem",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "1rem",
  height: "95vh",
};

const navTopStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  height: "100vh",
};

const logoContainerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.75rem",
  justifyContent: "space-between",
};

const logoStyle = {
  width: "2.43rem",
  height: "2.43rem",
};

const storeContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
  flex: 1,
};

const storeNameStyle = {
  fontSize: "0.9375rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "1.375rem",
};

const visitStoreStyle = {
  // fontFamily: Inter,
  fontSize: "0.8125rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1rem" /* 123.077% */,
  textDecorationLine: "underline",
  opacity: "0.8",
};

const navigationListStyle = {
  display: "flex",
  flexDirection: "column",
  //  alignItems: "flex-start",
  gap: "0.25rem",
  flex: 1,
};

const navigationItemStyle = {
  display: "flex",
  padding: "0.5rem 1rem",
  //  fontFamily: "Inter normal",
  fontSize: "0.875rem",
  fontWeight: "500",
  alignItems: "center",
  lineHeight: "1.25rem",
  gap: "0.75rem",
  background: "#ffffff1a",
  borderRadius: "0.25rem",
};

const iconStyle = {
  width: "1.25rem",
  height: "1.25rem",
};

const navBottomStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0.375rem 0.75rem",
  gap: "0.625rem",
  borderRadius: "0.25rem",
  background: "#353C53",
};

const creditIconStyle = {
  padding: "0.375rem",
  borderRadius: "0.25rem",
  background: "#ffffff1a",
};

const creditStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
  fontSize: "0.8rem",
  fontWeight: "400",
};

const creditAmountStyle = {
  fontSize: "1rem",
  fontWeight: "500",
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={navTopStyle}>
        <div style={logoContainerStyle}>
          <img
            src="https://via.placeholder.com/50x50"
            alt="Store Logo"
            style={logoStyle}
          />
          <div style={storeContainerStyle}>
            <div style={storeNameStyle}>Nishyan</div>
            <div style={visitStoreStyle}>Visit Store</div>
          </div>
          <DropdownIcon />
        </div>
        {/* Navigation List */}
        <div style={navigationListStyle}>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Home
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Orders
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Products
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Delivery
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Marketing
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Analytics
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Payments
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Tools
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Discounts
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Audience
          </div>
          <div style={navigationItemStyle}>
            <div style={iconStyle}>
              <MyProjectsIcon />
            </div>
            Plugins
          </div>
        </div>
      </div>
      <div style={navBottomStyle}>
        <div style={creditIconStyle}>
          <CreditIcon />
        </div>
        <div style={creditStyle}>
          <div>Available credits</div>
          <div style={creditAmountStyle}>222.10</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
