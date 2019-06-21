import React from 'react';
import logo from '../img/logo.png'
import  './navbar.css';

export const Navbar = () => {
    return <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a href="#logo" className="navbar-brand"><img src={logo} alt="Blog logo" />  <span>Blog</span></a>
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href ='#'>Get Started</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
}