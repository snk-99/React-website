import React from "react"
import Type from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
          <div className="main-info">
              <h1>Fullstack Developer</h1>
              <Type
              className="type-text"
              strings={["Software Development", "Web Design", "Software Testing"]}
              typeSpeed={"9"}
              backSpeed={"8"}
              loopCount={"4"}
              />
              <a href="#a" className="btn-contact">Contact Me</a>
          </div>
        </div>
    )
}

export default Header
