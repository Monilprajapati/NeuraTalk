import React from 'react'

const Message = ({ img, prompt }) => {
  return (
    <div className='flex gap-1'>
      <div className='img rounded-full rounded-br-none bg-blue-200 w-12 h-12 p-2 md:w-14 md:h-14'>
        <img src={img} alt="" className='w-full h-full' />
      </div>
      {/* <div className="message md:text-lg flex flex-wrap mt-5 py-1 px-3 font-lato border border-blue-100 w-fit rounded-md rounded-tl-none bg-blue-100">
        {prompt}
      </div> */}
    </div>
  )
}

export default Message