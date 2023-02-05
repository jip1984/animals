import React, {useState} from 'react'
import './App.css'
import AnimalShow from './AnimalShow'

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
const [animal, setAnimal] = useState([]);


    const handleClick = () => {
        setAnimal([...animal, getRandomAnimal()]);
    }

    const renderedAnimals = animal.map((animal, index) => {
            return <AnimalShow type={animal} key={index}/>
    });

  return (
    <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}

