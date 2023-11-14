import { useState } from "react"
const dPlants = {
  rose: {
    description:"Roses are quick-growing, thorny plants great for building defense walls."
  },
  apple_tree: {
    description:"Apple trees"
  }
}

const PlantTeam = () => {
  const [plants, setPlants] = useState([])
  const [plant, setPlant] = useState("")
  const addPlant = (e) => {
    e.preventDefault()
    const plantObject = dPlants[plant]
    const description = plantObject?.description||`unknown plant ${plant}`
    setPlants([...plants, description])
    setPlant("")
  }
  return <div className="team plant">
   
    <form onSubmit={addPlant}>
      <input value = {plant} onChange = {(e) => {setPlant(e.target.value)}}/>
      <button >Add</button>
    </form>
    <div>
    {plants.map((p, i) => {
      return <div key={i} >{p}</div>
    })}
   </div>
  </div>

}


export default PlantTeam