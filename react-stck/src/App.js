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
import Stocks from './pages/Stocks';
import NewStock from './components/NewStock';
import NewStocks from './pages/NewStockPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
// import {Container, Row, Col } from 'react-bootstrap';
// import Jumbotron from 'react-bootstrap/Jumbotron';

// def index(request):
//     if request.method == 'POST':
//         form = TickerForm(request.POST)
//         if form.is_valid():
//             ticker=request.POST('ticker')
//             return HttpResponseRedirect(ticker)
//     else:
//         form = TickerForm()
//     return render(request, 'index.html', {'form': form})



function App() {
  const ENDPOINT = ""

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
        {/* <Jumbotron/> */}
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/stocks' element={<Stocks/>}/>
        <Route path='/stocks/new' element={<NewStocks/>}/>
      </Routes>
      
      {/* <Routes>

        <Route path='/register' element={<Register />}/>
      </Routes> */}
    </div>
  );
}

export default App;
