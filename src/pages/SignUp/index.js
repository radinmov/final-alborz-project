import { useState } from "react";
import "./Style.css"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [Username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function post() {
        
        var data = JSON.stringify({
           email: email,
           username: Username,
           password: password
        });

        fetch("http://46.100.94.88:3003/api/auth/signup", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
        .then((response) => {
            response.json()
        })
        .then((result) => {
            console.log(result);
        });
    }

    return (
        <div className="wrapper">
                <h1>Login</h1>
                <div className="input-box">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="please enter your email" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Username" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button onClick={post} type="submit" className="btn">Login</button>
                <div className="register-link">
                    <p>Don't have an account? Register</p>
                </div>
        </div>
    );
}

export default SignUp;
