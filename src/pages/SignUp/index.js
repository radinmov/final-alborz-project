import { useState } from "react";
import "./Style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [Username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate()


    const notify = (message) => toast(message);



    function post() {
        const auth_inputs = [
            { name: "Username", value: Username },
            { name: "Email", value: email },
            { name: "Password", value: password }
          ];
          for (const field of auth_inputs) {
            if (field.value.length === 0) {
              toast.warn(`please enter a ${field.name}`, {
                position: "top-right",
                autoClose: 1007,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              // notify(`please enter a ${field.name}`);
              return;
            }
          }
        
        var data = JSON.stringify({
           email: email,
           username: Username,
           password: password
        });

        fetch("http://192.168.221.252:3003/api/auth/signup", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
        .then((response) => {
            response.json();
            console.log(response);
            let auth = response.ok
            if (auth === true) {
                toast.success(' SignUp sucsess', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  navigate('/login')
            } else {
                let er =response.statusText
                toast.error(`BackEnd:${er}`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
            }
        })
    }

    return (
        <>
            <ToastContainer />
        <div className="wrapper">
                <h1>SignUp</h1>
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
    </>
    );
}

export default SignUp;
