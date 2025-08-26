// Shimmer.js
import React from "react";


const Shimmer = () => {
  return (
    <div className="res-container">
      {/* Create an array of 12 items to map over for the shimmer cards */}
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img" />
            <div className="shimmer-h3" />
            <div className="shimmer-h4" />
            <div className="shimmer-h4" />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;