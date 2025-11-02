import React from "react"

import Icon from "./Icon.jsx"
import Profile from "./Profile.jsx"

function Header() {
    return (

        <header>
            <div>
                <div>
                    <h1> ÑAM </h1>
                </div>
            </div>
            <nav className="nav-icons">
                <Icon  alt="`Teaching" src="" href="" />
                <Icon  alt="Gym" src="" href="" />
                <Icon  alt="Curses" src="" href="" />
                <Icon  alt="Materials" src="" href="" />
                <Icon  alt="Home" src="" href="" />
            </nav>
                
            <Profile/>
            
        </header>

    )
}

export default Header;