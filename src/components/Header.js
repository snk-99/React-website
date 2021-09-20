import React from "react"
import Type from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper" id="Home">
            <div className="main-info">
                <h1>Fullstack Developer</h1>
                <Type
                    className="type-text"
                    strings={["Software Development", "Web Design", "Software Testing"]}
                    typeSpeed={"9"}
                    backSpeed={"8"}
                    loopCount={"4"}
                />

                <a href="https://docs.google.com/document/d/1X1hnMAYIbEC11Vnh4swUE3ymf2kdM5Kr6c9e_VS3r7Q/edit?usp=sharing" className="btn-contact" >Resume</a>
            </div>
        </div>
    )
}

export default Header
