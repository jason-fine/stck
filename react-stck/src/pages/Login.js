import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import LoginPage from '../components/LoginPage'

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <LoginPage/>
    </div>
  )
}

export default Home