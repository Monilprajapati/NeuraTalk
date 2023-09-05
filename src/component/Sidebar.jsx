import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { BiMessage } from "react-icons/bi";

const Sidebar = ({ className, sidebar, setSidebar }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="top font-lato bg-blue-200 p-3 flex justify-between items-center">
          <button className="flex gap-3 items-center text-2xl px-3 py-2 border border-black rounded-md w-1/2">
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

        <div className="chatlist mt-5">
          <div className="chat flex gap-3 items-center py-3 mx-5 my-2 pl-5 border border-black rounded-md">
            <BiMessage className="text-xl text-black" />
            <span className="text-black text-2xl font-lato">Chat</span>
          </div>

          <div className="chat flex gap-3 items-center py-3 mx-5 my-2 pl-5 border border-black rounded-md">
            <BiMessage className="text-xl text-black" />
            <span className="text-black text-2xl font-lato">Chat</span>
          </div>

          <div className="chat flex gap-3 items-center py-3 mx-5 my-2 pl-5 border border-black rounded-md">
            <BiMessage className="text-xl text-black" />
            <span className="text-black text-2xl font-lato">Chat</span>
          </div>

          <div className="chat flex gap-3 items-center py-3 mx-5 my-2 pl-5 border border-black rounded-md">
            <BiMessage className="text-xl text-black" />
            <span className="text-black text-2xl font-lato">Chat</span>
          </div>

          <div className="chat flex gap-3 items-center py-3 mx-5 my-2 pl-5 border border-black rounded-md">
            <BiMessage className="text-xl text-black" />
            <span className="text-black text-2xl font-lato">Chat</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
