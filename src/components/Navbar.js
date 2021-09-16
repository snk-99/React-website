import React from "react";
//font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#1">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#2">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#2">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#2">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#2">Resume</a>
                        </li>
                    </ul>

                </div>
            </div>  
        </nav>
    )
}

export default Navbar
