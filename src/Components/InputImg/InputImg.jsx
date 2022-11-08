import React from "react";
import "./InputImg.css";
import { FaUser } from "react-icons/fa";
const InputImg = ({photo,setPhoto}) => {
  return (
    <div className="InputImgContainer">
      <label className="InputImgLabel">
        {photo ? (
          <img
            alt="Avatar"
            className="InputImgAvatar"
            src={URL.createObjectURL(photo)}
          />
        ) : (
          <FaUser size={'100px'} className={'InputImgAvatar'} />
        )}
        <input
          name="Picture"
          className="InputImg"
          type="file"
          placeholder="Photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        ></input>
      </label>
    </div>
  );
};

export default InputImg;
