import React from 'react'
import { FaJs,FaHtml5,FaCss3,FaReact } from "react-icons/fa";
import './Skill.css'
const size="30px";
const Skill = () => {
  return (
        <ul className='SkillsContainer'>
            <li><FaHtml5 size={size}/></li>
            <li><FaCss3 size={size}/></li>
            <li><FaJs size={size}/></li>
            <li><FaReact size={size}/></li>
        </ul>
  )
}

export default Skill