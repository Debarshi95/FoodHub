import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>Loading</h4>
    </div>
  );
};

export default Loader;
