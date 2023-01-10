import React, { Component } from 'react';
import logoSloth from '../assets/logo-sloth.png'






class Navbar extends Component{

    render(){

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">
                    <img className="logo" src={logoSloth}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Booking</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Tours
                            </a>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Extremos</a>
                            <a className="dropdown-item" href="#">Aventura</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Familiares</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                    
                    <div>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search a tour" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        )

    }
}

export default Navbar