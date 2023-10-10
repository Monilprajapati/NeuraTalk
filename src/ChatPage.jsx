import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
// import { Configuration, OpenAIApi } from "openai";
import { TbSend } from "react-icons/tb";
import Message from "./component/Message";
import bot from "./assets/chatbot.png"
import user from "./assets/user.png"

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [gptResponse, setgptResponse] = useState("");
  const [chatList, setChatList] = useState([
    {
      id: 1,
      img: bot,
      prompt: "Hello, How can i help you"
    }
  ])
  console.log(prompt);

  // useEffect(() => {
  //   console.log(chatList);
  // }, [chatList])

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && prompt.length > 0) {
      event.preventDefault();
      onResponse();
    }
  }
  const onResponse = () => {
    const newMessage = {
      id: chatList.length + 1, // Generate a unique ID for each message
      img: user,
      prompt: prompt,
    };

    setChatList([...chatList, newMessage]);
    setPrompt("");
  };
  return (
    <div className="w-screen h-screen flex justify-between flex-col">
      <Navbar />
      <div className="mx-4 md:mx-7 lg:mx-24 xl:mx-48">
        <div className="chatArea pb-3 pr-7 pl-2 flex gap-5 flex-col overflow-y-scroll h-[500px]">
          {chatList.map((chat) => {
            return <Message key={chat.id} img={chat.img} prompt={chat.prompt} />;
          })}
        </div>
        <div className={`chatInput ${prompt.length > 95 ? "h-20" : "h-fit"}`}>
          <div className="inputField flex h-full items-center justify-between my-3 border border-black rounded-md relative">
            <textarea
              rows={1}
              type="text"
              value={prompt}
              placeholder="Type your message here"
              className="mr-12 font-lato text-lg py-3 px-2 h-full w-full bg-transparent outline-none resize-none"
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {prompt.length > 0 && (
              <button className="btn absolute right-0 mr-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-md" onClick={() => onResponse()}>
                <TbSend className="text-xl cursor-pointer" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
