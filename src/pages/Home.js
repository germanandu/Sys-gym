import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/navbar'
import imgCloud from '../pages/img/CloudStorage.png'
import img1 from '../pages/img/img1.png'
import img2 from '../pages/img/img2.png'

export default function Home() {
    return (
        <div className="container">
            <Navbar/>
            <div className="main">
            <div className="details2">
                <div className="details">
                    <div className="cardBoxContainer">
                        <div className="cardBox">
                            <div className="card">
                                <div>
                                    <div className="cardName">Fri</div>
                                </div>
                                <div className="iconBx">
                                    <div className="date">1</div>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="cardName">Sat</div>
                                </div>
                                <div className="iconBx">
                                    <div className="date">2</div>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="cardName">Sun</div>
                                </div>
                                <div className="iconBx">
                                    <div className="date">3</div>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="cardName">Mon</div>
                                </div>
                                <div className="iconBx">
                                    <div className="date">4</div>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="cardName">Tue</div>
                                </div>
                                <div className="iconBx">
                                    <div className="date">5</div>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="cardName">Wed</div>
                                </div>
                                <div className="iconBx">
                                    <div className="date">6</div>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="cardName">Thu</div>
                                </div>
                                <div className="iconBx">
                                    <div className="date">7</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Still to be paid</h2>
                            <Link to="/finances" className="btn">View All</Link>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Date</td>
                                    <td>Payment</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Juan Ramírez</td>
                                    <td>Jun 3rd, 2020</td>
                                    <td>$60.000</td>
                                    <td><span className="status overdue">Overdue</span></td>
                                </tr>
                                <tr>
                                    <td>Germán Anduquia</td>
                                    <td>Jun 5th, 2020</td>
                                    <td>$90.000</td>
                                    <td><span className="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>Felipe Valencia</td>
                                    <td>Jun 7th, 2020</td>
                                    <td>$60.000</td>
                                    <td><span className="status pending">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Recent Payments</h2>
                            <Link to="/finances" className="btn">View All</Link>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Date</td>
                                    <td>Payment</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Andrés Molina</td>
                                    <td>Jun 1st, 2020</td>
                                    <td>$60.000</td>
                                    <td><span className="status done">Done</span></td>
                                </tr>
                                <tr>
                                    <td>Germá Anduquia</td>
                                    <td>May 27, 2020</td>
                                    <td>$90.000</td>
                                    <td><span className="status pending">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>Gustavo Rojas</td>
                                    <td>May 25, 2020</td>
                                    <td>$120.000</td>
                                    <td><span className="status done">Done</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="details3">
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Cloud Storage</h2>
                        </div>
                        <td>
                            <div className="storage">
                                <img src={imgCloud} alt="cloud"/>
                            </div>
                        </td>
                    </div>
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Next Mainteinance</h2>
                        </div>
                        <table>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src={img1} alt="img1"/></div></td>
                                <td><h4>Leg Curl<br/><span>Lubrication in 5 days.</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src={img2} alt="img1"/></div></td>
                                <td><h4>Lat Pull Down<br/><span>Adjust in 7 days.</span></h4></td>
                            </tr>
                        </table>
                    </div>
                </div>        
            </div>
            </div>
        </div>
    )
}
