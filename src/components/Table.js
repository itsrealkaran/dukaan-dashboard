import React, { useState } from "react";
import {
  DropdownIcon2,
  InfoIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "./Icons"; // Import your Icons component

const styles = {
  tableContainer: {
    width: "100%",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHead: {
    fontSize: "12px",
    textTransform: "uppercase",
    backgroundColor: "#F2F2F2",
    borderRadius: "0.25rem",
  },
  tableRow: {
    backgroundColor: "transparent",
    borderBottom: "1px solid #D1D5DB",
  },
  tableCell: {
    padding: "12px 16px",
    whiteSpace: "nowrap",
    textAlign: "left",
    width: "25%",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
    gap: "1.5rem",
    color: "#4D4D4D",
    fontSize: "0.875rem",
    fontWeight: "600",
  },
  paginationNumbersContainer: {
    display: "flex",
    gap: "0.5rem",
  },
  paginationNumber: {
    backgroundColor: "transparent",
    borderRadius: "0.25rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    margin: "0 4px",
  },
  paginationButton: {
    display: "flex",
    backgroundColor: "#fff",
    border: "1px solid #d9d9d9",
    borderRadius: "0.25rem",
    alignItem: "center",
    padding: "0.375rem 0.75rem 0.375rem 0.75rem",
    gap: "0.375rem",
    cursor: "pointer",
  },
};

const Table = ({ currentRows }) => {
  return (
    <>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Order ID</th>
              <th style={styles.tableCell}>
                Order Date <DropdownIcon2 />
              </th>
              <th style={styles.tableCell}>Order Amount</th>
              <th style={styles.tableCell}>
                Transaction Fees <InfoIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((order, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{order.orderId}</td>
                <td style={styles.tableCell}>{order.orderDate}</td>
                <td style={styles.tableCell}>{order.orderAmount}</td>
                <td style={styles.tableCell}>{order.transactionFees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
