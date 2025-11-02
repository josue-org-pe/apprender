import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";

function Home() {
  const [user, setUser] = useState({ name: "Usuario demo" });

  useEffect(() => {
    console.log("Home renderizado ");
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header user={user} />
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h2>Bienvenido a tu espacio de aprendizaje 👋</h2>
        <p>
          Aquí verás tus cursos, materiales y actividades. ¡Prepárate para
          aprender!
        </p>
      </main>
    </div>
  );
}

export default Home;
