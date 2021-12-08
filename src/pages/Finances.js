import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link} from 'react-router-dom'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';

export default function Finances() {
    const [clientes, setClientes] = useState([]);
    const {currentUser} = useAuth();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date()
    var dayName = days[today.getDay()];
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    function sumasDias(fecha,dias){
        fecha.setDate(fecha.getDate()+dias)
        return fecha
    }

    const getClientes = () => {
        
        db.collection("clientes").onSnapshot((querySnapshot) =>{
            const docs =[];
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
                    docs.push({...doc.data(), ...elements});
                }
            })
            docs.sort(function(a,b){
                return a.nombre - b.nombre;
            })
            setClientes(docs);
        });
    };
    
    useEffect(()=>{
        getClientes(); // eslint-disable-next-line
     },[]);
    return (
        <div className="container2">
            <Navbar/>
            <div className="main">
            
                <div class="details affiliates">
                    
                    <div class="recentOrders machines">
                        <div class="cardHeader">
                            <h2>{dayName} {date}</h2>
                            <h2>Finances</h2>
                            <Link to="/home" class="btn">Home</Link>
                        </div>
                        {clientes.map(cliente =>(
                        <table key={cliente.id}>
                            <thead>
                                <tr>  
                                    <td>Name</td>
                                    <td>Last Subscription</td>
                                    <td>Next Payment</td>
                                    <td>Status</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.fecha_registro}</td>
                                    <td>{cliente.proximo_pago}</td>
                                    <td>{cliente.estado?<span className="status done">Done</span>:<span className="status overdue">Overdue</span>}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/affiliates-edit-status/${cliente.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
