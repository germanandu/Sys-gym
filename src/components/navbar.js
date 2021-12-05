import React from 'react'
import imgLogo from '../pages/img/Logo Completo 2.png'
import './narbar.css'
import {useAuth} from "../contexts/AuthContext"
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    const { currentUser,logout } = useAuth()
    const userLogout = () => {
        logout()
    }
    
    //MenuToggle
    const onClickToggle = () =>{
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        navigation.classList.toggle('active');
        main.classList.toggle('active'); 
    }
    
    return (
        <div className="container">
            <div id="navigation" className="navigation">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <img src={imgLogo} alt="logo"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/home">
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="title">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/finances">
                            <span className="icon"><ion-icon name="stats-chart-outline"></ion-icon></span>
                            <span className="title">Finances</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/machines">
                            <span className="icon"><ion-icon name="barbell-outline"></ion-icon></span>
                            <span className="title">Machines</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/affiliates">
                            <span className="icon"><ion-icon name="people-outline"></ion-icon></span>
                            <span className="title">Affiliates</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/settings">
                            <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                            <span className="title">Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div id="main" className="main">
                <div className="topbar">
                    <div className="toggle">
                        <button className="user" style={{border: "none",}} onClick={onClickToggle} > 
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>
                    </div>
                    <h1>{currentUser.email}</h1>
                    <input className="button-g"  onClick={userLogout} type="button" value="Sign out"/> 
                    
                </div>
            </div>
        </div>
    )
}
