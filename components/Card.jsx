import React from 'react'
import { MdDelete } from "react-icons/md";

const Card = ({title, desc}) => {
  return (
    <div className='card'>
      <div className="del">
        <MdDelete />
      </div>
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
    </div>
  )
}

export default Card