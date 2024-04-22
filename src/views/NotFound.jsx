import React from 'react'
import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const HandleClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className='conteiner text-center'>
        <Image className='p-5' variant='top' src='/404.png' height={450} />
      </div>
      <div className='container text-center'>
        <button className='button-1' onClick={HandleClick}>Volver!</button>
      </div>
    </>
  )
}

export default NotFound
