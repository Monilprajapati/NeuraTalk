import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./ChatPage";
import Navbar from "./component/Navbar";

import ChatProvider from "./context/ChatProvider";
import Home from "./pages/Home";

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
