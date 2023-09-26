"use client"

import { useState } from "react"

const ChatPage = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const sendMessage = () => {
    setMessages([...messages, message])
    setMessage("")
  }
  return <div>
   <div>
    {messages.map((m, i) => {
      return <div key={i} >{m}</div>
    })}
   </div>
    <div>
      <input value = {message} onChange = {(e) => {setMessage(e.target.value)}}/>
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>

}


export default ChatPage