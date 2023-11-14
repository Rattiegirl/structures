"use client"

import ChatTemplate from "@/components/ChatTemplate"
import { useEffect, useState } from "react"
const users = [
  {
    avatar: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Hamster",
    role: "stranger"
  },
  {
    avatar: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBiaXJkfGVufDB8fDB8fHww",
    name: "Bird",
    role: "stranger"
  },
  {
    avatar: "https://thumbs.dreamstime.com/b/open-red-rose-white-fully-blossomed-perfect-stem-leaves-pure-background-38686724.jpg",
    name: "Rose",
    role: "me"
  },
  {
    avatar: "https://thumbs.dreamstime.com/b/ivy-vine-5432089.jpg",
    name: "Vine",
    role: "stranger"
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV66Ew-09sgqSYs62mjJctnT3Km0DCHWCKyQ&usqp=CAU",
    name: "Rat",
    role: "me"
  },
]

const dialogue = [{
  text: "Hi this is our land go away",
  author: "Rose",
  image: "https://www.thespruce.com/thmb/boL72Ihu8SHaWY9dpwsUGHst_xo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rose-colors-4175293-10-cf1852ac8cb241dda76e0af42cfd3adc.jpg"
},
{
  text: "We already settled, we aren't moving",
  author: "Hamster",
  image: "https://external-preview.redd.it/NJr4LBy_49etDJ8xNzLj574nN2sxteF5713B2uKB85w.jpg?auto=webp&s=70117b9d9ccfae99b95dbecfd21cda24732b5838"
},
{
  text: "Plus we're the ones with the sharp teeth so we make the choice",
  author: "Hamster",
},
{
  text: "Time for a fight",
  author: "Rat",
},
{
  text: "finished",
  author: "Rat",
}]



const dialogueMessages = dialogue.map((dialogueMessage, index) => {
  const user = users.find((user) => {
    return (dialogueMessage.author === user.name)
  })
  return { message: dialogueMessage.text, avatar: user.avatar, fromMe: user.role === "me", image:dialogueMessage.image, id: index+1 }
})
let data = {i:0}
let interval = null
const dialogueMessagesLength = dialogueMessages.length;
const CreatureChatPage = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const [index, setIndex] = useState(0)
  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, { message, avatar: users[index].avatar, name: users[index].name, fromMe: users[index].role === "me" }])
    setMessage("")
  }
  useEffect(() => {
     interval = setInterval(() => {
      const i = data.i
      console.log(i, dialogueMessages[i])
      setMessages(messages => [...messages, dialogueMessages[i]])
      if (i >= dialogueMessagesLength - 1) {
       // alert("this isn't working")
        clearInterval(interval)
      }
      data.i = data.i + 1
    }, 1000)
  }, [])
  console.log(messages)
  return <div className="flex flex-col container">
    <div className="chat-list">{users.map((user, i) => {
      return <div className="chat-img" key={i}><img onClick={() => {
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


export default CreatureChatPage