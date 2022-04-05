import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className='login'>
       <div className="wrapper">
                <h1 className="title">
                    Login
                </h1>
                <div className="form-group">
                    <label for="">Email / phonenumber</label>
                    <input type="text" className="form-control" name="" id="" placeholder="email or phonenumber" />
                    <label for="">Password</label>
                    <input type="password" className="form-control" name="" id="" placeholder="password" />
                </div>
                <button className='btn-submit'>LogIn</button>
                <div className="links">
                    <a className='link' href='/forgotPass'>Forgot Password</a>
                    <a className='link' href='/register'>Create new account</a>
                </div>


            </div>
    </div>
  )
}

export default Login