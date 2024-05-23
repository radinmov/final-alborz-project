import { useState } from "react"
import "./style.css"
import { Link } from "react-router-dom";

export const Login = () => {
    const [Username , setUserName] = useState('');
    const [password , setpassword] = useState('');


    function post() {
    
        var data = JSON.stringify({
          username: Username,
          password: password,
        });
        fetch("http://46.100.94.88:3003/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        })
        .then((response) => response.json())
          .then((result) => {
            console.log(result);
 
          });
      }
    return (
        <div className="wrapper">

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
            <Link>Forgot Password</Link>
          </div>
          <button onClick={post} type="submit" className="btn">Login</button>
          <div class="register-link">
            <p>Dont have an account? Register</p>
          </div>
      </div>
    )
}



