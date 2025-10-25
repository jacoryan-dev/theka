import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha.tsx';
import Login from './pages/Login/Login.tsx';
import './App.css'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
      </Routes>
    </Router>
  );
}


export default App
