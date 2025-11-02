import { Routes, Route} from "react-router-dom"

import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

import ProtectRoute from "./components/ProtectRoute.jsx"

import './App.css'

function App() {

  return (
    <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={
          <ProtectRoute>
            <Home/>
          </ProtectRoute>
          } />
    </Routes>
  )
}

export default App
