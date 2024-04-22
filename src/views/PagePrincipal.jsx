import { Image } from 'react-bootstrap'
const PagePrincipal = () => {
  return (
    <>
      <div className='container text-center p-5 page'>
        <h1>Bienvenido Maestro Pokemón</h1>
        <div>
          <Image className='p-5' variant='top' src='pikachu.gif' height={370} />
        </div>
      </div>
    </>
  )
}

export default PagePrincipal
