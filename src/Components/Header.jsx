import React, { Component } from 'react';
import logo from '../assets/images/Logo 2.png';

class Header extends Component {
     
  render() { 
       var navLinks = document.getElementById("navLinks");

        function showMenu() {
            navLinks.style.right = "0";
        }

        function hideMenu() {
            navLinks.style.right = "-200px";
        }
    
        return (<div className="header">
        <nav id="navbar">
          <a href="#first"><img src={logo} className="App-logo" alt="logo" /></a>
          <a href="#first" className="Company">Online Voting System</a>
          <div className="nav-links" id="navLinks">
            <i className="fa-solid fa-rectangle-xmark" onClick={hideMenu} />
            <ul className="navbar-nav">
              {/* <li><a class="nav-links scroll" href="#first">HOME</a></li> */}
              <li><a className="nav-links scroll" href="login.html">LOGIN</a></li>
              <li><a className="nav-links scroll" href="#about">ABOUT US</a></li>
              <li><a className="nav-links scroll" href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <i className="fa-solid fa-bars" onClick={showMenu}/>
        </nav>
      </div>);
    }
}
 
export default Header;