import React from "react";
import "./Contact.css";
import { FaUser, FaPhone, FaFacebook, FaInstagram,FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div className="ContactHeader">
        <FaUser />
        <h3 className="ContactTitle">Contact</h3>
      </div>
      <div style={{marginLeft:'20px'}}>
        <div className="ContactItem">
          <FaPhone />
          <h4 >(31) 9 9205-1355</h4>
        </div>
        <div className="ContactItem">
          <FaFacebook />
          <h4 >dayvid.macedo.1</h4>
        </div>
        <div className="ContactItem">
          <FaInstagram />
          <h4 >mr.potatohead_0</h4>
        </div>
        <div className="ContactItem">
          <FaGithub />
          <h4 >DavvidMac</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
