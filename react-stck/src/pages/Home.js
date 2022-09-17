import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import MoveStuffAround from '../components/TickerFooter'


const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <MoveStuffAround/>
    </div>
  )
}

export default Home