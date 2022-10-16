import React from 'react'
import { FaHeart,FaBookReader,FaRobot,FaRunning,FaBlender } from "react-icons/fa";
import './Hobby.css'
const Hobby = () => {
  return (
    <div>
      <div className="HobbyHeader">
        <FaHeart />
        <h3 className="HobbyTitle">Hobby</h3>
      </div>
      <div style={{ marginLeft:'20px'}}>
        <div className="HobbyItem">
          <FaBookReader />
          <h4 >Leitura</h4>
        </div>
        <div className="HobbyItem">
          <FaRobot />
          <h4 >Automação</h4>
        </div>
        <div className="HobbyItem">
          <FaRunning />
          <h4 >Caminhar</h4>
        </div>
        <div className="HobbyItem">
          <FaBlender />
          <h4 >Modelar</h4>
        </div>
      </div>
    </div>
  )
}

export default Hobby