import React from 'react'
import "./register.css"
const Register = () => {
    return (
        <div className='register'> <div className="wrapper">
            <h1 className="title">
                Register
            </h1>
            <div className="form-group">
                <label for="">FullName</label>
                <input type="text" className="form-control" name="" id="" placeholder="Fullname" />
                <label for="">DoB</label>
                <input type="Date" className="form-control" name="" id="" />
                <label for="">Email</label>
                <input type="email" className="form-control" name="" id="" placeholder="email" />
                <label for="">Phonenumber</label>
                <input type="number" className="form-control" name="" id="" placeholder="phone number" />
                <label for="">Password</label>
                <input type="password" className="form-control" name="" id="" placeholder="password" />
                <label for="">Confirm Password</label>
                <input type="password" className="form-control" name="" id="" placeholder="ConfirmPassword" />
            </div>
            <div className='span'>
                Dolore optio eum in nesciunt corrupti magnam ullam molestias
                fugiat sunt architecto nisi a nulla, ab dicta mollitia rem?
                <b> PRIVACY POLICY</b>
            </div>
            <button className='btn-submit'>Submit</button>
            <div className="links">
                <a className='link' href='/'>Forgot Password</a>
                <a className='link' href='/login'>Login</a>
            </div>


        </div></div>
    )
}

export default Register