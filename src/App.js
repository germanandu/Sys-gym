import './App.css';
import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import {useAuth} from "./contexts/AuthContext"
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Finances from './pages/Finances';
import Machines from './pages/Machines';
import Affiliates from './pages/Affiliates';
import Settings from './pages/Settings';
import AddAffiliate from './pages/AddAffiliate';

function App() {
  const { currentUser } = useAuth()
  return (
    <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={currentUser?<Navigate replace to="/home" />:<Signup />}/>
          <Route path="login" element={currentUser?<Navigate replace to="/home" />:<Login />}/>
          <Route path="home" element={currentUser?<Home />: <Navigate replace to="/login" />}/>
          <Route path="finances" element={currentUser?<Finances />: <Navigate replace to="/login" />}/>
          <Route path="machines" element={currentUser?<Machines />: <Navigate replace to="/login" />}/>
          <Route path="affiliates" element={currentUser?<Affiliates />: <Navigate replace to="/login" />}/>
          <Route path="affiliates/add" element={currentUser?<AddAffiliate />: <Navigate replace to="/login" />}/>
          <Route path="settings" element={currentUser?<Settings />: <Navigate replace to="/login" />}/>
        </Routes>
    </Router>
  );
}

export default App;
