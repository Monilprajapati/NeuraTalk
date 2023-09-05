import React from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center relative font-lato bg-blue-200 px-2 py-4 shadow-md">
        <TbLayoutSidebarLeftExpand
          className="text-black text-3xl"
          onClick={() => setSidebar(!sidebar)}
        />
        <h1 className="text-3xl text-black font-bold mr-4">Neura Talk</h1>
      </div>
      {sidebar && (
        <Sidebar className="translate-x-5 delay-100 h-full fixed top-0 -left-5 w-screen z-50 shadow-md" sidebar={sidebar} setSidebar={setSidebar} />
      )}
    </>
  );
};

export default Navbar;
