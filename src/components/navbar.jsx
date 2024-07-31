import React, { useContext } from 'react'
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { User } from './context/users'

const Navbaar = () => {
    const navigate = useNavigate()
    const { user } = useContext(User);
    console.log(user)
  return (
          <Navbar expand="lg" className='overflow-hidden w-100'>
              <Container className='align-items-baseline position-relative '>
                  <NavLink to={'/'}><Navbar.Brand > <img src="https://worldwise-lemon.vercel.app/logo.png"  height={50} /> </Navbar.Brand></NavLink>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className=' navy align-items-baseline py-3'>
                          <NavLink to={"/pricing"} className="text-unstyle text-light h5  text-decoration-none" > PRICING </NavLink>
                          <NavLink to={"/product"} className="mx-3 text-light h5 text-decoration-none" > PRODUCT </NavLink>
                      {Object.keys(user).length > 0 ? 
                          <Button variant='success fw-bold h5 w-100 mt-2' onClick={() => navigate("/login")} >SIGNOUT</Button> : 
                          <Button variant='success fw-bold h5 w-100 mt-2' onClick={()=> navigate("/login")} >LOGIN</Button>
                          }
                      </Nav>
                  </Navbar.Collapse>
              </Container>
      </Navbar>
  )
}

export default Navbaar
