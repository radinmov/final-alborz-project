import { useState } from "react"
import "./style.css"

export const Login = () => {
    const [Username , setUserName] = useState('');
    const [password , setpassword] = useState('');


    function post() {
    
        var data = JSON.stringify({
          email: Username,
          password: password,
        });
        fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        })
        .then((response) => response.json())
          .then((result) => {
 
          });
      }
    return (
        <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt' ></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember Me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div class="register-link">
            <p>Dont have an account? Register</p>
          </div>
        </form>
      </div>
    )
}



