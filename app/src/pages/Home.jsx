import { useContext, useEffect, useState } from "react";

import HeaderTemp from "../components/HeaderTemp.jsx";
import CardCourse from "../components/CourseCard.jsx";
import CardUser from "../components/CardUser.jsx";

import { UserContext } from "../contexts/UserProvider.jsx";

const courses = [
  { tittle: "Aritmetica", porcent: 50 },
  { tittle: "Geometria", porcent: 25 },
  { tittle: "Calculo", porcent: 35 },
  { tittle: "Fisica", porcent: 16 }
]

const users = [
  { position: 1, name: "Sandro Chavez", points: 100 },
  { position: 2, name: "Alan Monje", points: 80 },
  { position: 3, name: "Luis Santiago", points: 60 },
  { position: 4, name: "Daniel Alcantara", points: 10 }
]

function Home() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    console.log("Home renderizado ");
  }, []);

  return (
    <>
      <HeaderTemp/>
      <main>
        <div className="content-main">
          <div className="listCourses" >
            {courses.map((course) => (
              <CardCourse tittle={course.tittle} porcent={course.porcent}/>
            ))}
          </div>
          <div className="">
            {users.map((user) => (
              <CardUser position={user.position} name={user.name} points={user.points} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
