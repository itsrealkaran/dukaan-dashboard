// Dashboard.js
import React, { useState } from "react";
import { SearchIcon, SortIcon, DownloadIcon } from "./Icons"; // Import your Icons component
import Card from "./Card";
import Table from "./Table";
import Pagination from "./Pagination";

const dashboardStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
};

const overviewStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const overviewContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const titleStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  fontStyle: "normal",
  color: "#1A181E",
};

const dropdownContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const dropdownStyle = {
  backgroundColor: "#fff",
  padding: "0.5rem",
  fontSize: "1rem",
  color: "#808080",
  outline: "none",
  borderRadius: "0.25rem",
  border: "1px solid #D9D9D9",
};

const cardsContainerStyle = {
  display: "flex",
  gap: "1.25rem",
  flexWrap: "wrap",
};

const transactionContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
};

const tableDataStyle = {
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  padding: "0.75rem 0.75rem 1.5rem 0.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
};

const operationsContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem", // Adjust the gap as needed
};

const searchBarContainerStyle = {
  backgroundColor: "#fff",
  borderRadius: "0.25rem",
  border: "1px solid #D9D9D9",
  padding: "0.625rem 1rem",
  gap: "0.5rem",
  display: "flex",
  //flex: 1,
  alignItems: "center",
};

const searchBarStyle = {
  border: "none",
  background: "transparent",
  color: "#808080",
  fontSize: "0.875rem",
  outline: "none",
  flex: 1,
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.75rem", // Adjust the gap as needed
};

const buttonStyle = {
  backgroundColor: "#fff",
  borderRadius: "0.25rem",
  border: "1px solid #d9d9d9",
  padding: "0.375rem 0.75rem",
  gap: "0.375rem",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};

const buttonText = {
  color: "#4D4D4D",
  fontSize: "1rem",
  fontWeight: "400", // Adjust the margin as needed
};

const tableStyle = {
  overflow: "auto",
};

const Dashboard = () => {
  const rowsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      orderId: "#123456",
      orderDate: "7 Jul 2023",
      orderAmount: "₹500",
      transactionFees: "₹20",
    },
    {
      orderId: "#234567",
      orderDate: "7 Jul 2023",
      orderAmount: "₹750",
      transactionFees: "₹30",
    },
    {
      orderId: "#345678",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1000",
      transactionFees: "₹40",
    },
    {
      orderId: "#456789",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1200",
      transactionFees: "₹50",
    },
    {
      orderId: "#567890",
      orderDate: "7 Jul 2023",
      orderAmount: "₹900",
      transactionFees: "₹35",
    },
    {
      orderId: "#678901",
      orderDate: "7 Jul 2023",
      orderAmount: "₹600",
      transactionFees: "₹25",
    },
    {
      orderId: "#789012",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1100",
      transactionFees: "₹45",
    },
    {
      orderId: "#111111",
      orderDate: "7 Jul 2023",
      orderAmount: "₹500",
      transactionFees: "₹20",
    },
    {
      orderId: "#678901",
      orderDate: "7 Jul 2023",
      orderAmount: "₹600",
      transactionFees: "₹25",
    },
    {
      orderId: "#789012",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1100",
      transactionFees: "₹45",
    },
    {
      orderId: "#111111",
      orderDate: "7 Jul 2023",
      orderAmount: "₹500",
      transactionFees: "₹20",
    },
    {
      orderId: "#222222",
      orderDate: "7 Jul 2023",
      orderAmount: "₹750",
      transactionFees: "₹30",
    },
    {
      orderId: "#333333",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1000",
      transactionFees: "₹40",
    },
    {
      orderId: "#444444",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1200",
      transactionFees: "₹50",
    },
    {
      orderId: "#555555",
      orderDate: "7 Jul 2023",
      orderAmount: "₹900",
      transactionFees: "₹35",
    },
    {
      orderId: "#666666",
      orderDate: "7 Jul 2023",
      orderAmount: "₹600",
      transactionFees: "₹25",
    },
    {
      orderId: "#777777",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1100",
      transactionFees: "₹45",
    },
    {
      orderId: "#888888",
      orderDate: "7 Jul 2023",
      orderAmount: "₹800",
      transactionFees: "₹30",
    },
    {
      orderId: "#999999",
      orderDate: "7 Jul 2023",
      orderAmount: "₹950",
      transactionFees: "₹40",
    },
    {
      orderId: "#101010",
      orderDate: "7 Jul 2023",
      orderAmount: "₹700",
      transactionFees: "₹25",
    },
    {
      orderId: "#111213",
      orderDate: "7 Jul 2023",
      orderAmount: "₹500",
      transactionFees: "₹20",
    },
    {
      orderId: "#121314",
      orderDate: "7 Jul 2023",
      orderAmount: "₹750",
      transactionFees: "₹30",
    },
    {
      orderId: "#131415",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1000",
      transactionFees: "₹40",
    },
    {
      orderId: "#141516",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1200",
      transactionFees: "₹50",
    },
    {
      orderId: "#151617",
      orderDate: "7 Jul 2023",
      orderAmount: "₹900",
      transactionFees: "₹35",
    },
  ];

  const totalRows = orders.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = orders.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div style={dashboardStyle}>
      {/* First Div - Overview */}
      <div style={overviewStyle}>
        <div style={overviewContainerStyle}>
          <div style={titleStyle}>Overview</div>
          <div style={dropdownContainerStyle}>
            <select id="select" style={dropdownStyle}>
              <option value="option1">Last Month</option>
              <option value="option2">This Month</option>
              <option value="option3">Others</option>
            </select>
          </div>
        </div>
        <div style={cardsContainerStyle}>
          <Card heading="Online orders" value="231" />
          <Card heading="Amount received" value="₹23,92,312.19" />
        </div>
      </div>

      <div style={transactionContainer}>
        {/* Title */}
        <div style={titleStyle}>Transactions | This Month</div>
        {/* White Background Section */}
        <div style={tableDataStyle}>
          {/* Buttons Container */}
          <div style={operationsContainerStyle}>
            {/* Search Bar Container */}
            <div style={searchBarContainerStyle}>
              <SearchIcon />
              <input
                type="text"
                placeholder="Search by order ID..."
                style={searchBarStyle}
              />
            </div>
            <div style={buttonContainerStyle}>
              <div style={buttonStyle}>
                <span style={buttonText}>Sort</span>
                <SortIcon />
              </div>
              <div style={buttonStyle}>
                <DownloadIcon />
              </div>
            </div>
          </div>
          {/*Table Container*/}
          <div style={tableStyle}>
            <Table currentRows={currentRows} />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
