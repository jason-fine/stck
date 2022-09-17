import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const StockContainer = styled.div`

`





const StockPage = () => {

  fetch('/api-auth/stocks')
  .then(res => res.json())
  .then(
    (result) => {
      print(result)
    }
  )

  return (
    <StockContainer>
        <h1>Add a new stock ticker</h1>
        <li><Link to='/stocks/:id'></Link></li>
        <br />
        <h1>Your Tracked Stocks</h1>
        
    </StockContainer>
  )
}

export default StockPage

