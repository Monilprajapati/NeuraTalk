import React, { useState } from "react";
import Navbar from "./component/Navbar";
// import { Configuration, OpenAIApi } from "openai";
import { TbSend } from "react-icons/tb";
import Message from "./component/Message";

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  console.log(prompt);

  const onSubmit = () => {
    console.log(prompt);
  }
  return (
    <div className="w-screen h-screen flex justify-between flex-col gap-2">
      <Navbar />
      <div className="mx-4 md:mx-7 lg:mx-24 xl:mx-48">
        <div className="chatArea">
          <Message />
        </div>
        <div className="inputField flex items-center justify-between my-3 border border-black rounded-md relative">
          <textarea
            rows={1}
            type="text"
            placeholder="Type your message here"
            className="mr-12 font-lato text-lg py-3 px-2 w-full bg-transparent outline-none resize-none"
            onChange={(e) => setPrompt(e.target.value)}
          />
          {prompt.length > 0 && (
            <button className="btn absolute right-0 mr-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-md" onClick={() => setPrompt("")}>
              <TbSend className="text-xl cursor-pointer" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
