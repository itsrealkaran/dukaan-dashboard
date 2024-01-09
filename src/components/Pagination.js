import React from "react";
import { LeftArrowIcon, RightArrowIcon } from "./Icons";

const styles = {
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
  },
  paginationButton: {
    display: "flex",
    backgroundColor: "#fff",
    border: "1px solid #d9d9d9",
    borderRadius: "0.25rem",
    alignItems: "center",
    padding: "0.375rem 0.75rem 0.375rem 0.75rem",
    gap: "0.375rem",
    cursor: "pointer",
  },
};

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div style={styles.paginationContainer}>
      <div
        style={styles.paginationButton}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <LeftArrowIcon /> Previous
      </div>
      <div style={styles.paginationNumbersContainer}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.paginationNumber,
              backgroundColor:
                index + 1 === currentPage ? "#146eb4" : "transparent",
              color: index + 1 === currentPage ? "#fff" : "#4D4D4D",
            }}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div
        style={styles.paginationButton}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next <RightArrowIcon />
      </div>
    </div>
  );
};

export default Pagination;
