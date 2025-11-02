import { useContext, useEffect, useState } from "react";

import HeaderTemp from "../components/HeaderTemp.jsx";

import { UserContext } from "../contexts/UserProvider.jsx";

function Home() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    console.log("Home renderizado ");
  }, []);

  return (
    <>
      <HeaderTemp/>
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h2>Bienvenido a tu espacio de aprendizaje 👋</h2>
        <p>
          Aquí verás tus cursos, materiales y actividades. ¡Prepárate para
          aprender!
        </p>
      </main>
    </>
  );
}

export default Home;
