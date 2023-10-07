import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import NewchatCard from "./NewchatCard";

const Sidebar = ({ className, sidebar, setSidebar }) => {
  return (
    <>
      <div className={`${className} pb-24 h-screen`}>
        <div className="top font-lato shadow-md bg-blue-200 py-2.5 px-3 flex justify-between items-center">
          <button className="flex gap-3 items-center text-2xl px-3 py-2 border border-black rounded-md w-1/2" onclick={() => { setSidebar(!sidebar) }}>
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
          <NewchatCard title={"New Chat"}/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
