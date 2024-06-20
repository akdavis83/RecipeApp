import React from 'react'
import { Logo, Nav } from '../styles/Navbar.styles'
import { Container } from '../styles/UI.styles'

const Navbar = () => {
  return (
    <Nav>
        <Container>
            <Logo/> 
        </Container>
    </Nav>
  )
}

export default Navbar