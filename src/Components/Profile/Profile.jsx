import React from "react";
import { FaUser } from "react-icons/fa";
import "./Profile.css";
const Profile = ({profile}) => {
  return (
    <div className="ProfileArea">
      <div>
        <FaUser />
        <h3 className="ProfileTitle">Perfil </h3>
      </div>
      <div>
        <p className="ProfileDesc">
          {profile}
        </p>
      </div>
      <div className="WebContact"></div>
    </div>
  );
};

export default Profile;
