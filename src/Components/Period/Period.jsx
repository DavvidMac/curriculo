import React from 'react'
import './Period.css'
const Period = ({Date,Local,Work,Description}) => {
  return (
    <div className='PeriodContainer'>
        <h4>{Date}</h4>
        <p>{Local}</p>
        <p>{Work}</p>
        <p className='PeriodContainerDescription'>{Description}</p>
    </div>
  )
}

export default Period