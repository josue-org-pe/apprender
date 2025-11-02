import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Crear Cuenta</h2>
      <form style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>Nombre:</label><br />
          <input type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label>Correo:</label><br />
          <input type="email" placeholder="usuario@email.com" />
        </div>
        <div>
          <label>Contraseña:</label><br />
          <input type="password" placeholder="••••••••" />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Registrarme</button>
      </form>
      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default Register;
