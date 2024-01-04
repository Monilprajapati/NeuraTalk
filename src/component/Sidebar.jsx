// Sidebar.js
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import NewchatCard from "./NewchatCard";
import { useChatContext } from "../context/ChatContext";

const Sidebar = ({ className, sidebar, setSidebar }) => {
  const { state, addChat, setActiveChat } = useChatContext();

  const handleChatClick = () => {
    addChat("New Chat");
    setSidebar(!sidebar);
    setActiveChat(state.chats.length + 1);
  };

  return (
    <>
      <div className={`${className} pb-24 h-screen`}>
        <div className="top font-lato shadow-md bg-blue-200 py-2.5 px-3 flex justify-between items-center">
          <button
            className="flex gap-3 items-center text-2xl px-3 py-2 border border-black rounded-md w-1/2"
            onClick={() => {
              handleChatClick();
            }}
          >
            <AiOutlinePlus className="font-bold text-black" />
            <span className="font-semibold text-black">New Chat</span>
          </button>
          <button
            className="p-2 rounded-md border border-black"
            onClick={() => setSidebar(!sidebar)}
          >
            <TbLayoutSidebarLeftExpand className="text-2xl text-black" />
          </button>
        </div>

        <div className="chatlist mt-2 h-full overflow-auto">
          {state.chats.map((chat) => (
            <NewchatCard
              key={chat.id}
              chatId={chat.id}
              title={chat.title}
              sidebar={sidebar}
              setSidebar={setSidebar}
              setActiveChat={setActiveChat}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
