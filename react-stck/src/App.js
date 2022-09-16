import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
// import SignupForm from './components/SignupForm/SignupForm';
// import Register from './pages/Register';
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';



function App() {

  const [state, setState] = useState({})

  useEffect(() => {
    console.log('useEffect Ran!')
    fetch('http://localhost:8000/')
    .then(res => res.json())
    .then(res => {
      setState(res)
      return res
    }).then(res => console.log(res))
  }, []) 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      
      {/* <Routes>

        <Route path='/register' element={<Register />}/>
      </Routes> */}
    </div>
  );
}

export default App;
