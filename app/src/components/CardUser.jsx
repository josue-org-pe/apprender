function CardUser({ position, name, points }){
    return(

        <div>
            {/* Puesto */}
            <div><p>{position}</p></div>
            {/* Nombre */}
            <div><p>{name}</p></div>
            {/* Puntaje */}
            <div><p>{points}</p></div>
        </div>

    )
}

export default CardUser