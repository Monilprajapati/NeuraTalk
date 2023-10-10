import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import NewchatCard from "./NewchatCard";

const Sidebar = ({ className, sidebar, setSidebar }) => {
  const chats = [{
    id: 1,
    title: "Hello there i am monil prajapati",
  },
  {
    id: 2,
    title: "How to post good tweet",
  },
  {
    id: 3,
    title: "Who is Mr.been",
  }]
  return (
    <>
      <div className={`${className} pb-24 h-screen`}>
        <div className="top font-lato shadow-md bg-blue-200 py-2.5 px-3 flex justify-between items-center">
          <button className="flex gap-3 items-center text-2xl px-3 py-2 border border-black rounded-md w-1/2" onClick={() => { setSidebar(!sidebar) }}>
            <AiOutlinePlus className="font-bold text-black" />
            <span className="font-semibold text-black">New Chat</span>
          </button>
          <button className="p-2 rounded-md border border-black">
            <TbLayoutSidebarLeftExpand
              className="text-2xl text-black"
              onClick={() => setSidebar(!sidebar)}
            />
          </button>
        </div>

        <div className="chatlist mt-2 h-full overflow-y-scroll">
          {
            chats.map((chat) => {
              return (
                <NewchatCard key={chat.id} title={chat.title} sidebar={sidebar} setSidebar={setSidebar} />
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
