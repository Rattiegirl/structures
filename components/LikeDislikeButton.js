import { useState } from "react"

const LikeDislikeButton = () => {
  const [likes, setLikes] = useState(0)
  return (
    <div style = {{padding: "20px"}}>  
    {/* <button onClick={() => {
      setLikes(likes + 1)
    }}>❤️</button>
      <button onClick={() => {
        setLikes(likes - 1)
      }}>🖤</button> */}
      <span className = "like-plus" onClick = {()=>{
        setLikes(likes + 1)
      }}>+</span>
      {likes >= 0 ? (
        <span>❤️ {likes}</span>
      ) : (
        <span>🖤 {-likes}</span>
      )}
      <span  className = "like-minus" onClick = {()=>{
        setLikes(likes-1)
      }}>-</span>
    </div>
  )
}
export default LikeDislikeButton