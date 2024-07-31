import React, { useContext } from 'react'
import Navbaar from '../navbar'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
      <div className='home'>
      <div className="container d-flex justify-content-center align-items-center flex-column h-75 ">
        <div className="home-title">
          <h1 className='text-center text-light'>You travel the world</h1>
          <h1 className='text-center text-light'>WorldWise keeps track of your adventures.</h1>
        </div>
        <p className='w-75 text-center text-secondary fs-lg'>A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.</p>
        <Button variant='success my-3 fw-bold' onClick={() => navigate('/login')} >GET STARTED</Button> : 
      </div>
    </div>
  )
}

export default Home
