'use client'
import LikeDislikeButton from "@/components/LikeDislikeButton"
import Section from "@/components/Section"
import { animalGoods, animal_things, plantGoods, plant_things } from "@/data_2"
import { useState } from "react"

const ShopPage = () => {
  //   const goods = plantGoods;
  const [goods, setGoods] = useState([])
  const [seeds, setSeeds] = useState(0)
 
  

  return (
    <div>
      <button onClick = {()=>{
        setGoods(animalGoods)
      }}>Animal</button>
      <button onClick = {()=>{
        setGoods(plantGoods)
      }}>Plant</button>
      <button onClick = {()=>{
        setSeeds(seeds + 1)
      }}>Magic</button>
      <p>Seeds: {seeds}</p>
   <LikeDislikeButton/>

      <div id="shop">
        <div className="d-flex">
          {goods.map((good) => {
            return (
              <div style={{ cursor: "pointer" }} className={`good good-${good.name}`} data-name={good.name} onClick={()=> {
                setSeeds(seeds - good.price)
              }}>
                <div className="title">{good.name}</div>
                <div className="img"><img src={`/shop/${good.img || "default.png"}`} alt={good.name} /></div>
                <div className="seeds">{good.price}</div>
              </div>
            )
          })}
        </div>
        {/* <Section title="Animals" characters={animal_things} />
        <Section title="Plants" characters={plant_things} /> */}
      </div>
    </div>
  )
}

export default ShopPage