import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
// import { Configuration, OpenAIApi } from "openai";
import { TbSend } from "react-icons/tb";
import Message from "./component/Message";
import bot from "./assets/chatbot.png"
import user from "./assets/user.png";
import sendMessageToOpenAI from "./gptResponse";

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [gptResponse, setgptResponse] = useState("");
  const [botIsLoading, setBotIsLoading] = useState(false);
  const [chatList, setChatList] = useState([
    {
      id: 1,
      img: bot,
      prompt: "Hello, How can i help you"
    }
  ])

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && prompt.length > 0) {
      event.preventDefault();
      onResponse();
    }
  }

  const onResponse = async () => {
    if (prompt.trim() === "") return;
    try {
      const userMessage = {
        id: chatList.length + 1, // Ensure each ID is unique
        img: user,
        prompt: prompt,
        timestamp: new Date(),
      };

      // Update chatList using the functional update form
      setChatList((prevChatList) => [...prevChatList, userMessage]);
      setPrompt("");

      // Simulate a reply delay (optional)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Send the prompt to the OpenAI API
      const aiResponse = await sendMessageToOpenAI(prompt);
      const gptMessage = {
        id: chatList.length + 2, // Ensure each ID is unique
        img: bot,
        prompt: aiResponse,
        timestamp: new Date(),
      };
      // Update chatList using the functional update form
      setChatList((prevChatList) => [...prevChatList, gptMessage]);
      setgptResponse(aiResponse);
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      const errorMessage = {
        id: chatList.length + 3, // Ensure each ID is unique
        img: bot,
        prompt: "Sorry, something went wrong. Please try again later.",
        timestamp: new Date(),
      };

      // Update chatList using the functional update form
      setChatList((prevChatList) => [...prevChatList, errorMessage]);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-between flex-col">
      <Navbar />
      <div className="mx-4 md:mx-7 lg:mx-24 xl:mx-48">
        <div className="chatArea pb-3 pr-7 pl-2 flex gap-5 flex-col overflow-y-scroll h-[610px]">
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
              className="mr-12 font-lato text-lg py-3 pl-3 pr-2 h-full w-full bg-transparent outline-none resize-none"
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
