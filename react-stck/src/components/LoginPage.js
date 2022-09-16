import React from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <div className="LoginPage">
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" >
        <div className="form-group">
          <div className="col-sm-12">
            <input type="email" className="form-control" placeholder="Email"  name="email"  />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="password" className="form-control" placeholder="Password"  name="pw"  />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  )
   
  
}

export default SignUpPage