import React from 'react'

const Card = ({title, desc}) => {
  return (
    <div className='card'>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
    </div>
  )
}

export default Card