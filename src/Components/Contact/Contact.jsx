import React from "react";
import "./Contact.css";
import {
  FaUser,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaGithub
} from "react-icons/fa";
const Contact = ({ telefone, facebook, instagram, GitHub }) => {
  telefone='(31) 9 9205-1355'
  facebook='https://www.facebook.com/dayvid.macedo.1/'
  instagram='https://www.instagram.com/mr.potatohead_0/'
  GitHub='https://github.com/DavvidMac'
  return (
    <div>
      <div className="ContactHeader">
        <FaUser />
        <h3 className="ContactTitle">Contact</h3>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div className="ContactItem">
          <FaPhone />
          <h4>{telefone}</h4>
        </div>
        <div className="ContactItem">
          <FaFacebook />
          <h4><a href={facebook}>dayvid.macedo.1</a></h4>
        </div>
        <div className="ContactItem">
          <FaInstagram />
          <h4> <a href={instagram}> mr.potatohead_0 </a> </h4>
        </div>
        <div className="ContactItem">
          <FaGithub />
          <h4> <a href={GitHub}>DavvidMac</a></h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
