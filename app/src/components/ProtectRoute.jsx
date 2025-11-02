import { useContext } from "react"
import {Navigate} from "react-router-dom"

import { UserContext } from "../contexts/UserProvider"

function ProtectRoute({children}){

    const {user, loading} = useContext(UserContext)

    if(loading){
        return <div>Cargando...</div>
    }

    if(!user){
        return <Navigate to={"/login"} replace/>
    }



    return children

}

export default ProtectRoute