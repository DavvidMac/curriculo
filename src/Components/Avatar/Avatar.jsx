import React from 'react'
import avatar from "./avatar.jpg"
import "./Avatar.css"
const Avatar = () => {
  return (
    <>
        <div className='AvatarArea'>
            <img className='AvatarImg' src={avatar} alt='Dayvid Macedo'/>
            <h2 className='AvatarTitle'>Dayvid Macedo</h2>
            <h3 >(WebDeveloper)</h3>
        </div>
    </>
  )
}

export default Avatar