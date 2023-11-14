"use client"

import ChatTemplate from "@/components/ChatTemplate"
import { useState } from "react"
const users = [
  {
    avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
    name: "Max",
    role: "stranger"
  },
  {
    avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
    name: "Mark",
    role: "stranger"
  },
  {
    avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
    name: "Ekaterina",
    role: "me"
  },
  {
    avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
    name: "Punk McGee",
    role: "stranger"
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV66Ew-09sgqSYs62mjJctnT3Km0DCHWCKyQ&usqp=CAU",
    name: "Rat",
    role: "me"
  },
]

const ChatPage = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const [index, setIndex] = useState(0)
  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, { message, avatar: users[index].avatar, name: users[index].name, image: `https://placekitten.com/200/${300+messages.length}`, fromMe: users[index].role === "me" }])
    setMessage("")
  }
  return <div className="flex flex-col container">
    <div className="chat-list">{users.map((user, i) => {
      return <div className={`chat-img ${i===index?"active":""}`}  key={i}><img onClick={() => {
        setIndex(i)
      }} src={user.avatar} />
      </div>
    })}</div>
    <ChatTemplate messages={messages} />
    <form onSubmit={sendMessage}>
      <input value={message} onChange={(e) => { setMessage(e.target.value) }} />
      <button >Send</button>
      {users[index].name}
    </form>
  </div>

}


export default ChatPage

//COPY THIS AND MAKE THE USERS PLANTS/ANIMALS