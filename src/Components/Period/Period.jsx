import React from 'react'

const Period = ({Date,Local,Work,Description}) => {
  return (
    <div>
        <h4>{Date}</h4>
        <h2>{Local}</h2>
        <h3>{Work}</h3>
        <p>{Description}</p>
    </div>
  )
}

export default Period