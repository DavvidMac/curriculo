import React from 'react'
import "./Avatar.css"
const Avatar = ({photo,nome,profissao}) => {
  return (
    <>
        <div className='AvatarArea'>
            <img className='AvatarImg' src={photo?URL.createObjectURL(photo):''} alt='Dayvid Macedo'/>
            <h2 className='AvatarTitle'>{nome}</h2>
            <p >{profissao}</p>
        </div>
    </>
  )
}

export default Avatar