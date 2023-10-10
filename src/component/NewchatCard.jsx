import React from 'react'
import { BiMessage } from "react-icons/bi";


const NewchatCard = ({ title, sidebar, setSidebar }) => {
    return (
        <div className="chat flex gap-3 items-center py-3 mx-5 my-3 pl-5 border border-black rounded-md" onClick={() => setSidebar(!sidebar)}>
            <BiMessage className="text-xl text-black" />
            <span className="text-black text-2xl font-lato">{title.length > 0
                ? title && title.substr(0, 17) + "..."
                : "New Chat"}</span>
        </div>
    )
}

export default NewchatCard