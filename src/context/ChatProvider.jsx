// ChatProvider.js
import React, { useReducer } from 'react';
import { ChatContext, initialState, actions, chatReducer } from './ChatContext';

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const addChat = (title) => {
    dispatch({ type: actions.ADD_CHAT, payload: { title } });
  };

  const addMessage = (chatId, message) => {
    dispatch({ type: actions.ADD_MESSAGE, payload: { chatId, message } });
  };

  const setLoading = (loading) => {
    dispatch({ type: actions.SET_LOADING, payload: loading });
  };

  const setActiveChat = (chatId) => {
    dispatch({ type: actions.SET_ACTIVE_CHAT, payload: chatId });
  };

  return (
    <ChatContext.Provider value={{ state, addChat, addMessage, setLoading, setActiveChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
