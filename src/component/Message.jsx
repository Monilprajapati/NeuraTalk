import React from 'react'

const Message = ({img,prompt}) => {
  return (
    <div className='flex'>
      <div className='img'>
        <img src={img} alt="" />
      </div>
      <div className="message">
        {prompt}
      </div>
    </div>
  )
}

export default Message