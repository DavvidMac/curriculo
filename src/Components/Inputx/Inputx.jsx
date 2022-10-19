import React from "react";
import "./Inputx.css";

const Inputx = ({label,pHolder,valor,setValor}) => {
  return (
    <>
        <input
        className="InputxInput"
          type="text"
          placeholder={pHolder}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        ></input>
    </>
  );
};

export default Inputx;
