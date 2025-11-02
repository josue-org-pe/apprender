function CourseCard({tittle, porcent}){

    return(
        <div className="courseCard">
            <div><h2>{tittle}</h2></div>
            <div><p>{porcent}</p></div>
        </div>
    )

}

export default CourseCard
