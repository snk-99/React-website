import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
//font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {


    return (
        <div className="nav">
            <Link
            className="nav-link"
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
              Home
          </Link>
            
          <Link
            className="nav-link"
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
              About
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="Project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
              Portfolio
          </Link>
          <Link
            className="nav-link"
            activeClass="active"
            to="Footer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
              Contact
          </Link>
          



        </div>

                    

                   
    )
}

export default Navbar
