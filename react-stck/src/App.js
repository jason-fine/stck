import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

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
      
    </div>
  );
}

export default App;
