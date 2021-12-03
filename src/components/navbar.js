import React from 'react'
import imgLogo from '../pages/img/Logo Completo 2.png'
import './narbar.css'
import {useAuth} from "../contexts/AuthContext"
import {Link} from 'react-router-dom'

export default function Navbar() {
    const { currentUser,logout } = useAuth()
    const userLogout = () => {
        logout()
    }
    //MenuToggle
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    const onClickToggle = () =>{
        navigation.classList.toggle('active');
        main.classList.toggle('active'); 
    }
    
    return (
        <div className="container">
            <div class="navigation">
                <ul>
                    <li>
                        <Link to="/home">
                            <img src={imgLogo} alt="logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span class="title">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span class="icon"><ion-icon name="stats-chart-outline"></ion-icon></span>
                            <span class="title">Finances</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span class="icon"><ion-icon name="barbell-outline"></ion-icon></span>
                            <span class="title">Machines</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                            <span class="title">Affiliates</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                            <span class="title">Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="main">
                <div class="topbar">
                    <div class="toggle">
                        <a onClick={onClickToggle} class="toggle" >
                            <ion-icon name="menu-outline"></ion-icon>
                        </a>
                    </div>
                    <h1>{currentUser.email}</h1>
                    <input className="button-g"  onClick={userLogout} type="button" value="Sign out"/> 
                    
                </div>
            </div>
        </div>
    )
}
