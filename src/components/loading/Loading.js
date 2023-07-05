import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading">
      <span className="Loading-text">Loading</span>
      <span className="Loading-dot">.</span>
      <span className="Loading-dot">.</span>
      <span className="Loading-dot">.</span>
    </div>
  );
};

export default Loading;
