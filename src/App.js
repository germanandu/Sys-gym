import './App.css';
import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import {useAuth} from "./contexts/AuthContext"
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const { currentUser } = useAuth()
  return (
    <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/signup" element={currentUser?<Navigate replace to="/home" />:<Signup />}/>
          <Route path="/login" element={currentUser?<Navigate replace to="/home" />:<Login />}/>
          <Route path="/home" element={currentUser?<Home />: <Navigate replace to="/login" />}/>
        </Routes>
    </Router>
  );
}

export default App;
