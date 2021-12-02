import React from 'react'
import imgLogo from '../pages/img/Logo Completo 2.png'
import './narbar.css'
import {useAuth} from "../contexts/AuthContext"
export default function Navbar() {
    const { currentUser,logout } = useAuth()
    const userLogout = () => {
        logout()
    }
    
    return (
        <div className="container">
            <div class="navigation">
                <ul>
                    <li>
                        <a href="Home.html">
                            <img src={imgLogo} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span class="title">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span class="icon"><ion-icon name="stats-chart-outline"></ion-icon></span>
                            <span class="title">Finances</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span class="icon"><ion-icon name="barbell-outline"></ion-icon></span>
                            <span class="title">Machines</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                            <span class="title">Affiliates</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                            <span class="title">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <h1>{currentUser.email}</h1>
                <input className="link"  onClick={userLogout} type="button" value="Sign out"/> 
                
            </div>
        </div>
    )
}
