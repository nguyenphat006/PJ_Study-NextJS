import Image from "next/image";
import Chatbox from "./Components/chatbox.js"
import Header from "./Components/header.js"


export default function Home() {
  return (
    <div>
      <div>
      <Header />    
      </div>
      <div>
      <Chatbox />
      </div>
    </div>
  );
}
