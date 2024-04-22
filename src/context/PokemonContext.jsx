import { createContext, useState, useEffect } from 'react'

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([])

  const getData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000')
    const data = await response.json()
    const newArray = Object.values(data.results).flatMap(pokemon => ({ ...pokemon }))
    setPokemones(newArray)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <PokemonContext.Provider value={{ pokemones, setPokemones }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
