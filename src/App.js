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
import AddMachines from './pages/AddMachines';
import EditAffiliate from './pages/EditAffiliate';
import EditMachine from './pages/EditMachine';
import EditFinances from './pages/EditFinances';
import EditGym from './pages/EditGym';

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
          <Route path="machines/add" element={currentUser?<AddMachines />: <Navigate replace to="/login" />}/>
          <Route path="machines-edit/:keyword" element={currentUser?<EditMachine />: <Navigate replace to="/login" />}/>
          <Route path="affiliates" element={currentUser?<Affiliates />: <Navigate replace to="/login" />}/>
          <Route path="affiliates/add" element={currentUser?<AddAffiliate />: <Navigate replace to="/login" />}/>
          <Route path="affiliates-edit/:keyword" element={currentUser?<EditAffiliate />: <Navigate replace to="/login" />}/>
          <Route path="affiliates-edit-status/:keyword" element={currentUser?<EditFinances />: <Navigate replace to="/login" />}/>
          <Route path="settings" element={currentUser?<Settings />: <Navigate replace to="/login" />}/>
          <Route path="settings/edit-gym" element={currentUser?<EditGym />: <Navigate replace to="/login" />}/>
        </Routes>
    </Router>
  );
}

export default App;
