import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserProvider.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {user, setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Usuario de prueba
    const userDemo = { email: "skiper@h.com", password: "hola" };

    if (email === userDemo.email && password === userDemo.password) {
      alert("Inicio de sesión exitoso ");

      // 💾 Guardar sesión local
      setUser(userDemo.email);

      // 🚀 Redirigir a Home
      navigate("/home");
    } else {
      setError("Usuario o contraseña incorrectos ");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
