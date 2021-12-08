import React from 'react'
import Navbar from '../components/navbar'
import {useAuth} from "../contexts/AuthContext"
import {Link} from 'react-router-dom'

export default function Settings() {
    const { logout } = useAuth()
    const userLogout = () => {
        logout()
    }
    return (
        <div className="container2">
            <Navbar/>
            <div className="main">
                <div class="details affiliates">
                    <div class="recentOrders machines">
                        <div class="cardHeader">
                            <h2>Settings</h2>
                        </div>
                        <div className="cardBoxSettings">
                            <Link className="button-g" to="/">About us</Link>
                            <Link className="button-g"  to="/settings/edit-gym" type="button">Edit Gym</Link>
                            <input className="button-g"  onClick={userLogout} type="button" value="Sign out"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
