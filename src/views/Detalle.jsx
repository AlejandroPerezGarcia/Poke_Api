import { React, useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

const Detalle = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json()
        const idPokemon = data.id
        const imgPokemon = data.sprites.other['home'].front_default
        const typePokemon = data.types.map((tipo) => tipo.type.name)
        const abilitiesPokemon = data.abilities.map((item) => item.ability.name)

        const infoPokemon = {
          id: idPokemon,
          img: imgPokemon,
          types: typePokemon,
          abilities: abilitiesPokemon
        }
        console.log(abilitiesPokemon)
        setPokemon(infoPokemon)
      } catch (error) {
        console.log(error)
      }
    }

    getPokemon()
  }, [name])

  return (
    <div className='conteiner card-2'>
      <h1 className='p-3'>Pokemon {name}</h1>
      {pokemon && (
        <Card style={{ width: '25rem' }} border='danger' className='card_1 container'>
          <Card.Img variant='top' src={pokemon.img} />
          <div className=' texto'>
            <ListGroup horizontal className='list-group-flush ' style={{ width: '10rem' }}>
              <ListGroup.Item className='text-center'>
                Tipo:
                <ul>
                  {pokemon.types.map((type) => (
                    <li key={type}>
                      <hr />
                      {type}
                      <hr />
                    </li>
                  ))}
                </ul>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className='list-group-flush' style={{ width: '16rem' }}>
              <ListGroup.Item>
                Habilidades
                <ul>
                  {
                    pokemon.abilities.map((ability) => (
                      <li key={ability}>
                        <hr />
                        {ability}
                        <hr />
                      </li>
                    ))
                  }
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Card>

      )}
      {!pokemon && <div>Espere un Momento Cargando información del Pokémon...</div>}

    </div>
  )
}

export default Detalle
