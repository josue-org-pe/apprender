import { useContext } from "react";
import { Link } from "react-router-dom"

import Icon from "./Icon.jsx"
import Profile from "./Profile.jsx"

import { UserContext} from "../contexts/UserProvider.jsx";

function Header() {

    const {user, setUser} = useContext(UserContext)

    return (

        <header>
            <div>
                <div>
                    <h1><Link>Ñam</Link></h1>
                </div>
            </div>
            {/*Iconos de navegacion*/}
            <nav className="nav-icons">
                <Icon  alt="Teaching" href="/Teaching" src=""/>
                <Icon  alt="Gym" href="/Gym" src=""/>
                <Icon  alt="Courses" href="/Courses" src=""/>
                <Icon  alt="Materials" href="/Materials" src=""/>
                <Icon  alt="Home" href="/home" src=""/>
            </nav>
                
            <Profile username={user?.email}/>
            
        </header>

    )
}

export default Header;