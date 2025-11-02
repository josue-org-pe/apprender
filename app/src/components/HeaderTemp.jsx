import { useContext } from "react";
import Icon from "./Icon.jsx"
import Profile from "./Profile.jsx"
import { UserContext} from "../contexts/UserProvider.jsx";



function Header() {

    const {user, setUser} = useContext(UserContext)

    return (

        <header>
            <div>
                <div>
                    <h1><a href=""> ÑAM </a></h1>
                </div>
            </div>
            {/*Iconos de navegacion*/}
            <nav className="nav-icons">
                <Icon  alt="`Teaching" src="" href="" />
                <Icon  alt="Gym" src="" href="" />
                <Icon  alt="Curses" src="" href="" />
                <Icon  alt="Materials" src="" href="" />
                <Icon  alt="Home" src="" href="" />
            </nav>
                
            <Profile username={user}/>
            
        </header>

    )
}

export default Header;