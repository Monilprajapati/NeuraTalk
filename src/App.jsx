import "./App.css";
import ChatPage from "./ChatPage";
import Navbar from "./component/Navbar";
import ChatProvider from "./context/ChatProvider";

function App() {
  return (
    <ChatProvider>
      <Navbar />  
      <ChatPage />
    </ChatProvider>
  );
}

export default App;
