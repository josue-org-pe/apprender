function Icon({alt, src, href}) {

    return(

        <div className="Icon">
            <a href={href}><img src={src} alt={alt} /></a>
        </div>

    )
    
}

export default Icon;