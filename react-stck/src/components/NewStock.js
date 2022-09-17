import React, {useState} from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const NewStockContainer = styled.div`
align-items: center;
display: flex;
justify-content: center;
height:50vh;
`
const NewStock = () => {

    // const initialState =() =>{
    //     name:'',
    //     current_amount_of_shares:'',
    //     price_prediction:'',
    //     buy_or_sell:''

    // }
    // const[formData,setFormData] = useState(initialState)
    // const handleChange = (e) => {

    //     setFormData({...formData,[e.target.id]:e.target.value})
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }
    return(
        <NewStockContainer>
        <form>
            <label htmlFor='name'>Name: </label>
            <input id='name' name='name' type='text' />
            <br />
            <br />
            <label htmlFor='current_amount_of_shares'>Number of Shares: </label>
            <input id='current_amount_of_shares' name='current_amount_of_shares' type='text' />
            <br />
            <br />
            <label htmlFor='price_prediction'>Price Prediction: </label>
            <input id='price_prediction' name='price_prediction' type='text' />
            <br />
            <br />
            <label htmlFor='buy_or_sell'>Is it a buy or sell? </label>
            <input id='buy_or_sell' name='buy_or_sell' type='text' />
            <br />
            <br />
            <input type='submit' value='Add to List'/>

            


        </form>
        </NewStockContainer>
        
        
    )
}
export default NewStock