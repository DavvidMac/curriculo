import React from 'react'
import './FormBox.css'
const FormBox = ({titulo,children}) => {
  return (
    <div className='FormBoxContainer'>
        <h3 className='FormBoxTitle'>{titulo}</h3>
        <div className='FormBoxChildren'>{children}</div>
    </div>
  )
}

export default FormBox