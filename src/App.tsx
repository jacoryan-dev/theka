import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha.tsx";
import Login from "./pages/Login/Login.tsx";
import "./App.css";
import RedefinirSenha from "./pages/RedefinirSenha/RedefinirSenha.tsx";
import Cadastro from "./pages/Cadastro/Cadastro.tsx";
import Contato from "./pages/Contato/Contato.tsx";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import SobreNos from "./pages/SobreNos/SobreNos.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas sem Navbar/Footer (Autenticação) */}
        <Route path="/" element={<Login />} />
        <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="/RedefinirSenha" element={<RedefinirSenha />} />
        <Route path="/Cadastro" element={<Cadastro />} />

        {/* Rotas com Navbar/Footer (Páginas principais) */}
        <Route
          path="/Contato"
          element={
            <MainLayout>
              <Contato />
            </MainLayout>
          }
        />
        <Route
          path="/SobreNos"
          element={
            <MainLayout navbarVariant="pink">
              <SobreNos />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
