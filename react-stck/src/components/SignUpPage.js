import React from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" >
        {/* <form className="form-horizontal" onSubmit={this.handleSubmit} > */}
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name"  name="name"  />
              {/* <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /> */}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" name="email"  />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" name="password"  />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password"  name="passwordConf"  />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" >Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
  )
}

export default SignUpPage