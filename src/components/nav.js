import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <div className="nav">
            <nav className="container navbar navbar-expand-lg navbar-primary bg-transparent">
            <Link className="navbar-brand" to="#">
                <img src={logo} alt="logo" />
            </Link>
            <button  style={{"outline":"none"}} className="navbar-toggler bg-transparent" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-transparent">
                <i class="fa fa-bars"></i>
            </span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">მთავარი <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#Courses">სერვისი</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#footer">კონტაქტი</a>
                </li>
            </ul>
            </div>
        </nav>      
      </div>
    );
}
export default Nav;