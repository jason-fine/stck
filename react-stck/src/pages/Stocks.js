import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SignUpPage from '../components/SignUpPage'
import StockPage from '../components/StockPage'
import MoveStuffAround from '../components/TickerFooter'

const Stocks= () => {
  return (
    <div>
        <Header/>
        <StockPage/>
        <MoveStuffAround/>

    </div>
  )
}

export default Stocks