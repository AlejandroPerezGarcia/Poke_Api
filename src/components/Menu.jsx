import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <Navbar className='bg-body-tertiary container'>
      <Container className='titulo'>
        <Navbar.Brand href='/' className='justify-content-end'>
          <img
            alt=''
            src='/poke.jpeg'
            width='35'
            height='35'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Nav.Link className='justify-content-end p-3 '>
          <Link to='/'> Home </Link> | <Link to='/pokemones'> Pokemones</Link>
        </Nav.Link>
      </Container>
    </Navbar>
  )
}

export default Menu
