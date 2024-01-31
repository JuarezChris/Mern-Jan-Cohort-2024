import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const [clicked, setClicked] = useState(false)
  const [pokeData, setPokeData] = useState([])

  useEffect( () => {
    console.log("Mounted")
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then( response => {
        // console.log(response.data.results)
        // setPokeData(response.data.results)
        const pokeList = response.data.results
        let finalPokeList = []
        pokeList.map( (item) => {
          axios.get(item.url)
            .then( (response) => {

              let pokeObj = {
                name: response.data.name,
                image: response.data.sprites.front_shiny
              }
              finalPokeList.push(pokeObj)
              setPokeData([...finalPokeList])
            } )
            .catch( error => {
              console.log(error)
            })
          
        })
        console.log(finalPokeList)
      })
      .catch( error => {
        console.log(error)
      })
  }, [] )

  return (
    <>
      {
        pokeData.map( (item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <img src={item.image} alt="" />
          </div>
        ) )
      }
      {/* <button onClick={() => setClicked(!clicked)}>Click me!</button> */}
    </>
  )
}

export default App
