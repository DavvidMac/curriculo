import React from "react";
import { FaSuitcase, FaGraduationCap,FaStar } from "react-icons/fa";
import "./History.css";
const History = ({ icone, campo }) => {
  let FaIco
if(icone==="SuitCase"){
  FaIco=FaSuitcase
}
if(icone==="Hat"){
  FaIco=FaGraduationCap
}
if(icone==="Book"){
  FaIco=FaStar
}
  return (
    <div>
      <div className="HistoryHead">
          {icone && <FaIco size={'20px'}/>}
        <div className="HistoryField">
          <h3>{campo}</h3>
        </div>
      </div>
    </div>
  );
};

export default History;
