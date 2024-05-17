import Image from "next/image";
import Header from "./components/Header"
import Sidebar from "./components/sidebar/Sidebar"
import ChatPage from "./chat/page"

function Home() {
  return (
    <div>
     <Sidebar/>
     <button>add</button>
     <ChatPage/>
      {/* Other content */}
    </div>
  );
}
export default Home;
