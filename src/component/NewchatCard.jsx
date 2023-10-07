import React from 'react'
import { BiMessage } from "react-icons/bi";


const NewchatCard = ({title}) => {
    return (
        <div className="chat flex gap-3 items-center py-3 mx-5 my-3 pl-5 border border-black rounded-md">
            <BiMessage className="text-xl text-black" />
            <span className="text-black text-2xl font-lato">{title}</span>
        </div>
    )
}

export default NewchatCard