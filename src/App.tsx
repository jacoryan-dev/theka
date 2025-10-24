import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import './App.css'
import './pages/Login/Login.module.css'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}


export default App
