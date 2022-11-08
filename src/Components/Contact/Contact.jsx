import React from "react";
import "./Contact.css";
import {
  FaUser,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaGithub
} from "react-icons/fa";
const Contact = ({ contact, facebook, instagram, gitHub }) => {
  let face=facebook.split('https://www.facebook.com/')
  let inst=instagram.split('https://www.instagram.com/')
  let git=gitHub.split('https://github.com/')
  return (
    <div>
      <div className="ContactHeader">
        <FaUser />
        <h3 className="ContactTitle">Contact</h3>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div className="ContactItem">
          <FaPhone />
          <h4>{contact}</h4>
        </div>
        <div className="ContactItem">
          <FaFacebook />
          <h4><a href={facebook}>{face}</a></h4>
        </div>
        <div className="ContactItem">
          <FaInstagram />
          <h4> <a href={instagram}> {inst} </a> </h4>
        </div>
        <div className="ContactItem">
          <FaGithub />
          <h4> <a href={gitHub}>{git}</a></h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
