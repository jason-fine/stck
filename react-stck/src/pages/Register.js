import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SignUpPage from '../components/SignUpPage'

const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <SignUpPage/>
    </div>
  )
}

export default Home