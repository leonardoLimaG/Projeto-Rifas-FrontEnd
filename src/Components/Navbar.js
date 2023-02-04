import { Link, Router, Route, Routes } from 'react-router-dom';
import React from "react";
import App from '../App';
import Style from './Navbar.css'

function Navbar () {
    return( 
        <div className="navbar-menu">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/about">About</Link> </a>   
            <a><Link to="/contact">Contact</Link></a>      
        </div>

    );
}
export default Navbar;