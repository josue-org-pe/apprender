// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  // Comprobamos si hay un usuario en localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!user; // true si hay usuario

  return (
    <Router>
      <Routes>
        {/* Si no está logueado, mostrar Login */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} />

        {/* Registro */}
        <Route path="/register" element={isAuthenticated ? <Navigate to="/home" replace /> : <Register />} />

        {/* Home solo accesible si está logueado */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
