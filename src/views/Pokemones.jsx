import React, { useContext, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useNavigate } from 'react-router-dom'

const Pokemones = () => {
  const { pokemones } = useContext(PokemonContext)
  const [pokemon, setPokemon] = useState('')
  console.log('pokemones', pokemones)
  console.log('pokemon', pokemon)
  console.log('setpokemon', setPokemon)
  const navigate = useNavigate()

  const HandleClick = () => {
    if (pokemon.trim() === '') return
    navigate(`/pokemon/${pokemon}`)
  }

  return (
    <>
      <div className='image-container container text-center p-5'>
        <h3>Selecciona un Pokémon</h3>
        <select id='pokemonSelect' onChange={(e) => setPokemon(e.target.value)}>
          <option value=''>Selecciona un Pokémon</option>
          {pokemones.map(poke => (
            <option key={poke.name} value={poke.name}>
              {poke.name.toUpperCase()}
            </option>
          ))}
        </select>
        <button className='button-1' onClick={HandleClick}>¡Atrapalo YA!</button>
      </div>
    </>
  )
}

export default Pokemones
