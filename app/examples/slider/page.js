"use client"
import { useState } from "react"

const pictures = ["/img/hen.jpg", "/img/rose.webp", "/img/predators/wolf.png"]

function Slider() {
  const [index, setIndex] = useState(0)
  const nextPic = () => {
    if (index === pictures.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
const prevPic = () => {
  if (index === 0){
    setIndex(pictures.length - 1)
  }else{
    setIndex(index - 1)
  }
}
  return (
    <div className="slider">
      <button onClick={prevPic}>Prev</button>
      <img src={pictures[index]} alt="" />
      <button onClick={nextPic}>Next</button>
    </div>
  )

}

export default Slider