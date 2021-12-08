import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/navbar'
import imgCloud from '../pages/img/CloudStorage.png'
import NextMainteinance from '../components/NextMainteinance';

export default function Home() {

    const [clientesOver, setClientesOver] = useState([]);
    const [clientesDone, setClientesDone] = useState([]);
    const {currentUser} = useAuth();
    const today = new Date()

    function sumasDias(fecha,dias){
        fecha.setDate(fecha.getDate()+dias)
        return fecha
    }

    const getClientes = () => {
        
        db.collection("clientes").onSnapshot((querySnapshot) =>{
            const docsOver =[];
            const docsDone =[];
            querySnapshot.forEach((doc)=>{
                if (doc.data().gym_email === currentUser.email) {
                    let estadoAct = true
                    let lastDate = new Date(doc.data().fecha_registro)
                    lastDate = sumasDias(lastDate,+30)
                    const dateFinal = lastDate.getFullYear()+'-'+(lastDate.getMonth()+1)+'-'+lastDate.getDate();
                    if(today>lastDate){
                        estadoAct = false
                    }
                    let elements = {
                        id:doc.id,
                        proximo_pago: dateFinal,
                        estado: estadoAct
                    }
                    if(docsDone.length<3 && estadoAct){
                        docsDone.push({...doc.data(), ...elements})
                    }
                    if(docsOver.length<3 && !estadoAct){
                        docsOver.push({...doc.data(), ...elements})
                    }
                }
            })
            
            setClientesOver(docsOver);
            setClientesDone(docsDone);
        });
    };
    
    useEffect(()=>{
        getClientes(); // eslint-disable-next-line
     },[]);
    return (
        <div className="container2">
            <Navbar/>
            <div className="main">
            <div className="details2">
                <div className="details affiliates">
                    <div className="recentOrders machines">
                        <div className="cardHeader">
                            <h2>Still to be paid</h2>
                            <Link to="/finances" className="btn">View All</Link>
                        </div>
                        {clientesOver.map(cliente =>(
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Last Payment</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.fecha_registro}</td>
                                    <td>{cliente.estado?<span className="status done">Done</span>:<span className="status overdue">Overdue</span>}</td>
                                </tr>
                            </tbody>
                        </table>
                        ))}
                    </div>
                    
                    <div className="recentOrders machines">
                        <div className="cardHeader">
                            <h2>Recent Payments</h2>
                            <Link to="/finances" className="btn">View All</Link>
                        </div>
                        {clientesDone.map(cliente =>(
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>                                    
                                    <td>Last Payment</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.fecha_registro}</td>                                    
                                    <td>{cliente.estado?<span className="status done">Done</span>:<span className="status overdue">Overdue</span>}</td>
                                </tr>
                            </tbody>
                        </table>
                        ))}
                    </div>
                </div>
                
                <div className="recentOrders machines">
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
                    <NextMainteinance/>
                </div>        
            </div>
            </div>
        </div>
    )
}
