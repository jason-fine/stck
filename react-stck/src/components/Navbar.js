
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://media.istockphoto.com/vectors/stock-exchange-board-with-market-index-or-graphs-vector-id1322406349?k=20&m=1322406349&s=612x612&w=0&h=lf1QFdDmW9mK4QqrGJzWHb08FI0DHRwVq-RvuhGcaCQ=')", height : '100 px'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                href='http://localhost:3000/register'
                
              >
                Register
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href='http://localhost:3000/login'
              >
                Login
              </MDBBtn>
            
          </div>
        </div>
      </div>
    </header>
  );
}