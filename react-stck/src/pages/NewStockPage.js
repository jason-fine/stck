import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import MoveStuffAround from '../components/TickerFooter'
import StockPage from '../components/StockPage'
import NewStock from '../components/NewStock'

const NewStocks= () => {
    return (
      <div>
          <Header/>
          <NewStock/>
          <MoveStuffAround/>
  
      </div>
    )
  }
  
  export default NewStocks