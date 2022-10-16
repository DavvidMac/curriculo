import React from "react";
import { FaUser } from "react-icons/fa";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="ProfileArea">
      <div>
        <FaUser />
        <h3 className="ProfileTitle">Perfil </h3>
      </div>
      <div>
        <p className="ProfileDesc">
          Curiosidade é a minha força motriz, desde cedo me perguntava sobre as
          coisas ao meu redor e como elas funcionavam, com isso aprendi sobre
          diversos assuntos, eletronica, automação, Programação e modelagem 3D.
        </p>
      </div>
      <div className="WebContact"></div>
    </div>
  );
};

export default Profile;
