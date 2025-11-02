import { useContext } from "react"
import {Navigate} from "react-router-dom"

import { UserContext } from "../contexts/UserProvider"

function ProtectRoute({children}){

    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to={"/login"} replace/>
    }

    return children

}

export default ProtectRoute