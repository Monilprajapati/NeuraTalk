// NewchatCard.js
import React from "react";
import { BiMessage } from "react-icons/bi";
import { useChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const NewchatCard = ({ chatId, title, sidebar, setSidebar }) => {
  const { setActiveChat } = useChatContext();
  const navigate = useNavigate();
  
  const handleChatClick = () => {
    setActiveChat(chatId);
    setSidebar(!sidebar);
    navigate("/chat");
  };

  return (
    <div
      className="chat flex gap-3 items-center py-3 mx-5 my-3 pl-5 border border-black rounded-md"
      onClick={handleChatClick}
    >
      <BiMessage className="text-xl text-black" />
      <span className="text-black text-2xl font-lato">
        {title.length > 0 ? title.substr(0, 17) + "..." : "New Chat"}
      </span>
    </div>
  );
};

export default NewchatCard;
