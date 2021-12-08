import React, {useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link} from 'react-router-dom'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';

export default function Affiliates() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const[clientes,setClientes]=useState([]);
    const {currentUser} = useAuth();
    const today = new Date()
    var dayName = days[today.getDay()];
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const getClientes = () => {
        
        db.collection("clientes").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                if (doc.data().gym_email === currentUser.email) {
                docs.push({...doc.data(), id:doc.id});
                }
            })
            docs.sort(function(a,b){
                return a.nombre - b.nombre;
            })
            setClientes(docs);
        });
    };
    const deleteCliente = async( id)=>{
        if (window.confirm('Estas seguro que deseas eliminar este cliente ?')){
             await db.collection('clientes').doc(id).delete();
        }
     }
    useEffect(()=>{
        getClientes(); // eslint-disable-next-line
     },[]);
    return (
        <div className="container2">
            <Navbar/>
            <div className="main">
            <div className="details affiliates">
                    <div className="recentOrders machines">
                        <div className="cardHeader">
                            <h2>{dayName} {date}</h2>
                            <h2>Clients</h2>
                            <Link to="/affiliates/add" className="btn">Add</Link>
                        </div>
                        {clientes.map(cliente =>(
                        <table key={cliente.id}>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Codigo</td>
                                    <td>Age</td>
                                    <td>Weight</td>
                                    <td>Height</td>
                                    <td>BMI</td>
                                    <td>Subscription</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.codigo}</td>
                                    <td>{cliente.edad}</td>
                                    <td>{cliente.peso}</td>
                                    <td>{cliente.altura}</td>
                                    <td>{cliente.BMI}</td>
                                    <td>{cliente.fecha_registro}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/affiliates-edit/${cliente.id}`}>Edit</Link>
                                        <button className="btn btn-danger" onClick={()=>deleteCliente(cliente.id)}>Delete</button>
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
