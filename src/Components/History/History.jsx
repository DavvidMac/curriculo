import React from "react";
import "./History.css";
const History = ({ icone, campo }) => {
  return (
    <div>
      <div>
        <p>{icone}</p>
        <h2>{campo}</h2>
      </div>
    </div>
  );
};

export default History;
