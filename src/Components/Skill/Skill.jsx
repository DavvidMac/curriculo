import React from "react";
import { FaJs, FaHtml5, FaCss3, FaReact,FaRust,FaJava,FaPython } from "react-icons/fa";
import "./Skill.css";
const size = "30px";
const Skill = ({
  rust,
  js,
  react,
  Html5,
  Python,
  Css3,
  java,
}) => {
  console.log(Css3)
  return (
    <ul className="SkillsContainer">
      {Html5 && 
        <li>
          <FaHtml5 size={size} />
        </li>
      }
      {Css3 && 
        <li>
          <FaCss3 size={size} />
        </li>
      }
      {js && 
        <li>
          <FaJs size={size} />
        </li>
      }
      {react && 
        <li>
          <FaReact size={size} />
        </li>
      }
      {rust && 
        <li>
          <FaRust size={size} />
        </li>
      }
      {Python && 
        <li>
          <FaPython size={size} />
        </li>
      }
      {java && 
        <li>
          <FaJava size={size} />
        </li>
      }
    </ul>
  );
};

export default Skill;