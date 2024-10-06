import React from "react";

const Square = ({ onClick, value }) => {
  return (
    <div
      className="square"
      onClick={onClick} 
      style={{
        border: "2px solid black",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "2em",
        borderRadius: "50%",
        backgroundColor:"white"
      }}
    >
      {value}
    </div>
  );
};

export default Square;
