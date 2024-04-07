// NewchatCard.js
import React from "react";
import { BiMessage } from "react-icons/bi";
import { useChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";

const NewchatCard = ({ chatId, title, sidebar, setSidebar }) => {
  const { setActiveChat, state } = useChatContext();
  const navigate = useNavigate();

  const handleChatClick = () => {
    setActiveChat(chatId);
    setSidebar(!sidebar);
    navigate("/chat");
  };
  console.log(state.chats)
  const handleDeleteChat = () => {
    // Delete the chat
    const newChats = state.chats.filter((chat) => chat.id !== chatId);
    localStorage.setItem("chats", JSON.stringify(newChats));    
  };

  return (
    <div className="chat flex gap-3 items-center justify-between px-4 py-3 mx-5 my-3 pl-5 border border-black rounded-md">
      <div className="flex gap-3 items-center w-full" onClick={handleChatClick}>
        <BiMessage className="text-xl text-black" />
        <span className="text-black text-2xl font-lato">
          {title.length > 0 ? title.substr(0, 17) + "..." : "New Chat"}
        </span>
      </div>
      {/* <IoTrashOutline
        className="text-2xl text-black"
        onClick={handleDeleteChat}
      /> */}
    </div>
  );
};

export default NewchatCard;
