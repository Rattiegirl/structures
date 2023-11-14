
import { useState } from "react"
const dAnimals = {
  hamster: {
    description:"Hamsters are speedy little creatures that can chew through walls and dig tunnels."
  },
  bird: {
    description:"Birds are great for carrying and dropping off teammates at hard-to-reach locations."
  }
}

const AnimalTeam = () => {
  const [animals, setAnimals] = useState([])
  const [animal, setAnimal] = useState("")
  const addAnimal = (e) => {
    e.preventDefault()
    const animalObject = dAnimals[animal]
    const description = animalObject?.description||`unknown animal ${animal}`
    setAnimals([...animals, description])
    setAnimal("")
  }
  return <div className="team animal">
   
    <form onSubmit={addAnimal}>
      <input value = {animal} onChange = {(e) => {setAnimal(e.target.value)}}/>
      <button >Add</button>
    </form>
    <div>
    {animals.map((a, i) => {
      return <div key={i} >{a}</div>
    })}
   </div>
  </div>

}


export default AnimalTeam