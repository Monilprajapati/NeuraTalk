import React from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="flex justify-between shadow-sm shadow-white items-center relative font-lato bg-blue-200 px-7 py-4">
        {pathname === "/chat" && (
          <TbLayoutSidebarLeftExpand
            className="text-black text-3xl cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          />
        )}
        <h1
          className="text-3xl xl:text-4xl ml-5 cursor-pointer text-black font-bold mr-4"
          onClick={() => navigate("/")}
        >
          Neura Talk
        </h1>
      </div>
      {sidebar && (
        <Sidebar
          className="md:w-96 translate-x-5 z-40 ease-in-out duration-300 fixed top-0 -left-5 w-screen bg-white shadow-md cursor-pointer"
          sidebar={sidebar}
          setSidebar={setSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
