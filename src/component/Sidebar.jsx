import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Sidebar = ({ className, sidebar, setSidebar }) => {
  return (
    <>
      <div className={className}>
        <div className="top font-lato bg-blue-200 p-3 flex justify-between items-center">
          <button className="flex gap-3 items-center text-2xl px-3 py-2 border border-black rounded-md w-1/2">
            <AiOutlinePlus className="font-bold text-black" />
            <span className="font-semibold text-black">New Chat</span>
          </button>
          <button className="p-2 rounded-md border border-black">
            <TbLayoutSidebarLeftExpand className="text-2xl text-black" onClick={() => setSidebar(!sidebar)}/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
