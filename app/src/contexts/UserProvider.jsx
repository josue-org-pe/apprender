import { createContext , useState , useEffect} from "react";

export const UserContext = createContext()

export function UserProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false)
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    return(
        <UserContext.Provider value={ {user, setUser, loading} }>
            {children}      
        </UserContext.Provider>
    )

}
