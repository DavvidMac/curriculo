import React from "react";
import {
  FaHeart,
  FaBookReader,
  FaRobot,
  FaRunning,
  FaBlender,
} from "react-icons/fa";
import "./Hobby.css";
const Hobby = ({ listHobbies }) => {
  return (
    <div>
      <div className="HobbyHeader">
        <FaHeart />
        <h3 className="HobbyTitle">Hobby</h3>
      </div>
      <div style={{ marginLeft: "20px" }}>
        {listHobbies?.map((hob, index) => (
          <div key={index} className="HobbyItem">
            <li>{hob}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
