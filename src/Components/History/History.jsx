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
        <div className="Icone">
          {icone && <FaIco size={'40px'}/>}
        </div>
        <div className="Field">
          <h2>{campo}</h2>
        </div>
      </div>
    </div>
  );
};

export default History;
