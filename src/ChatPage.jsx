// ChatPage.js
import React, { useState, useEffect, useRef } from "react";
import { TbSend } from "react-icons/tb";
import Message from "./component/Message";
import bot from "./assets/chatbot.png";
import user from "./assets/user.png";
import sendMessageToOpenAI from "./gptResponse";
import { useChatContext } from "./context/ChatContext";
import LoadingMessage from "./component/LoadingMessage";

const ChatPage = () => {
  const { state, addMessage, setActiveChat } = useChatContext();
  const activeChat = state.chats.find((chat) => chat.id === state.activeChatId);
  const [loading, setLoading] = useState(state.isLoading);
  const [prompt, setPrompt] = useState("");
  const chatAreaRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && prompt.length > 0) {
      event.preventDefault();
      onResponse();
      activeChat.title = prompt;
    }
  };

  const onResponse = async () => {
    if (prompt.trim() === "") return;
    try {
      const userMessage = {
        id: activeChat.messages.length + 1, // Ensure each ID is unique within the chat
        img: user,
        prompt: prompt,
        timestamp: new Date(),
      };

      // Update chatList of the active chat
      addMessage(state.activeChatId, userMessage);
      activeChat.title = prompt;
      setPrompt("");

      // Simulate a reply delay (optional)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(true);
      // Send the prompt to the OpenAI API
      const aiResponse = await sendMessageToOpenAI(prompt);
      setLoading(false);
      const gptMessage = {
        id: activeChat.messages.length + 2, // Ensure each ID is unique within the chat
        img: bot,
        prompt: aiResponse,
        timestamp: new Date(),
      };

      // Update chatList of the active chat
      addMessage(state.activeChatId, gptMessage);
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      const errorMessage = {
        id: activeChat.messages.length + 3, // Ensure each ID is unique within the chat
        img: bot,
        prompt: "Sorry, something went wrong. Please try again later.",
        timestamp: new Date(),
      };

      // Update chatList of the active chat
      addMessage(state.activeChatId, errorMessage);
    }
  };

  useEffect(() => {
    if (chatAreaRef.current && activeChat) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
      console.log("Scrolled to the bottom");
    } else {
      console.log("Chat area or activeChat is undefined");
    }
  }, [activeChat, activeChat?.messages,loading]);

  return (
    <div className="w-screen">
      <div className="mx-4 md:mx-7 lg:mx-24 xl:mx-48 h-[91vh]">
        {activeChat && (
          <div className="flex flex-col justify-between h-full">
            <div
              ref={chatAreaRef}
              className="chatArea pb-3 pt-2 mt-2 pl-2 flex gap-5 flex-col scroll-smooth overflow-auto"
            >
              <>
                {activeChat.messages.map((message) => (
                  <>
                    <Message
                      key={message.id}
                      img={message.img}
                      prompt={message.prompt}
                    />
                  </>
                ))}
                {loading && (
                  <>
                    <LoadingMessage />
                  </>
                )}
              </>
            </div>
            <div
              className={`chatInput ${prompt.length > 95 ? "h-20" : "h-fit"}`}
            >
              <div className="inputField flex items-center justify-between my-3 border border-black rounded-md relative">
                <textarea
                  rows={1}
                  type="text"
                  value={prompt}
                  placeholder="Type your message here"
                  className="mr-12 font-lato text-lg py-3 pl-3 pr-2 h-full w-full bg-transparent outline-none resize-none"
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e)}
                  disabled={loading}
                  autoFocus={true}
                  />
                {prompt.length > 0 && (
                  <button
                  className="btn absolute right-0 mr-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-md"
                  onClick={() => onResponse()}
                  disabled={loading}
                  >
                    <TbSend className="text-xl cursor-pointer" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
