import React from 'react'
import Ticker from 'react-ticker'
import styled from 'styled-components'

const TickerContainer = styled.div`
position:absolute;
left:0;
bottom:0;
right:0;
`

const MoveStuffAround = () => (
    <TickerContainer>
        <Ticker>
        {({ index }) => (
            <>
                {/* <h1>This is the Headline of element #{index}!</h1> */}
                <h1>AAPL AMZN TSLA UBER GOOG MSFT GE BAC F</h1>
                <img src="www.my-image-source.com/" alt=""/>
            </>
        )}
        </Ticker>
    </TickerContainer>
    
)

export default MoveStuffAround