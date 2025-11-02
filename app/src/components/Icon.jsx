import { Link } from "react-router-dom"

function Icon({alt, src, href}) {
    

    return(

        <div className="Icon">
            <Link to={href}><img src={src} alt={alt} /></Link>
        </div>

    )
    
}

export default Icon;