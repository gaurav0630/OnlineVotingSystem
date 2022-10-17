import Popup from './Popup';
import { Link , useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Admin_Login = () => {
            
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  
  const loginAdmin = async (e) => {
    e.preventDefault();

    const res = await fetch('/adminlogin',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Login");
      console.log("Invlid Login");
    } else {
      window.alert("Login successfull");
      console.log("Login successfull");
      // navigate("/OTP_Confirm");
    }
  }
    return (<div>
        <div className="header">
          <nav>
            <a href="index.html"><img src="Images/Logo 2.png" /></a>
            <a href="index.html" className="Company">Online Voting System</a>
            <Popup type = 'Voter Number' />
            <div className="nav-links" id="navLinks">
              <i className="fa-solid fa-rectangle-xmark" onclick="hideMenu()" />
              <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="login.html">VOTER LOGIN</a></li>
              </ul>
            </div>
            <i className="fa-solid fa-bars" onclick="showMenu()" />
          </nav>
        </div>
        <div className="Home">
          <div className="text-box">
            <div className="signin-signup">
              <form method="POST" action="#" className="sign-in-form">
                <i className="fa-solid fa-circle-user" />
                <h2 className="title">Admin</h2>  
                <div className="input-field">
                  <i className="fas fa-user" /> 
                  <input type="email" value = {username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" id="username" />
                </div>  
                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" id="password" />
                </div>
                <input type="button" id="Login" className="btn solid" defaultValue="Login" onClick={loginAdmin} />
              </form>
            </div>
          </div>
        </div>
      </div>);
    }

 
export default Admin_Login;