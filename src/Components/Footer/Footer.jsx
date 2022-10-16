import React from 'react'
import { FaReact} from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <p>Esse curriculo foi criado mim utilizando Reactjs a título de aprendizagem</p>
        <FaReact className={'FooterIcone'} size={'20px'} />
    </div>
  )
}

export default Footer