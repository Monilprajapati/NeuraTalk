// ChatContext.js
import React, { createContext, useReducer, useContext } from "react";
import bot from "../assets/chatbot.png";
import user from "../assets/user.png";

const initialState = {
  chats: JSON.parse(localStorage.getItem("chats")) || [],
  activeChatId: 1,
  isLoading: false,
};

const actions = {
  ADD_CHAT: "ADD_CHAT",
  ADD_MESSAGE: "ADD_MESSAGE",
  SET_LOADING: "SET_LOADING",
  SET_ACTIVE_CHAT: "SET_ACTIVE_CHAT",
};

const chatReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_CHAT:
      const newChat = {
        id: state.chats.length + 1,
        title: action.payload.title,
        messages: [
          {
            id: 1,
            img: bot,
            prompt: "Hi, I'm a Neura. Ask me anything!",
          },
        ],
      };

      localStorage.setItem("chats", JSON.stringify([...state.chats, newChat]));
      return {
        ...state,
        chats: [...state.chats, newChat],
      };
    case actions.ADD_MESSAGE:
      const updatedChats = state.chats.map((chat) =>
        chat.id === action.payload.chatId
          ? { ...chat, messages: [...chat.messages, action.payload.message] }
          : chat
      );
      localStorage.setItem("chats", JSON.stringify(updatedChats));
      return {
        ...state,
        chats: updatedChats,
      };
    case actions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChatId: action.payload,
      };
    default:
      return state;
  }
};

const ChatContext = createContext();

const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export { ChatContext, useChatContext, initialState, actions, chatReducer };
