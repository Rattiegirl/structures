"use client"

import { useState } from "react"

const colors = ["crimson", "turquoise", "yellow", "lavender"]

const colorButtonStyle = {
  border: "3px solid blue ",
  padding: "5px",
  borderRadius: "20%"
}
const buttonWrapper = {
  display: "flex",
  gap: "10px",
  padding: "5px",
  border: "3px solid purple"
}
const ColorsPage = () => {
  const [activeColor, setActiveColor] = useState("orange")
  return (

    <div style={{ ...buttonWrapper, backgroundColor: activeColor }}>
      {colors.map((color) => {
        return (<button onClick={() => {
          setActiveColor(color)
        }} style={colorButtonStyle}>{color}</button>)
      })}
    </div>

  )
}





export default ColorsPage