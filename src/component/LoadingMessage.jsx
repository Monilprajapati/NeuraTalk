import React from "react";
import bot from "../assets/chatbot.png";
import { FallingLines } from "react-loader-spinner";

const LoadingMessage = () => {
  return (
    <div>
      <div className="flex gap-1">
        <div className="img rounded-full rounded-br-none bg-blue-200 w-12 h-12 p-2 md:w-14 md:h-14">
          <img src={bot} alt="" className="w-full h-full" />
        </div>
        <div className="message md:text-lg flex flex-wrap mt-5 py-1 px-3 font-lato border border-blue-100 w-fit rounded-md rounded-tl-none bg-blue-100">
          <FallingLines
            color="#4338ca"
            height="30px"
            width="30px"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
