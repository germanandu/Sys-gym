import React, {useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link} from 'react-router-dom'
import {db} from "../firebase"

export default function Affiliates() {
    const[clientes,setClientes]=useState([]);

    const getClientes = () => {
        
        db.collection("clientes").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
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
        getClientes();
     },[]);
    return (
        <div className="container">
            <Navbar/>
            <div className="main">
            <div class="details affiliates">
                    <div class="recentOrders machines">
                        <div class="cardHeader">
                            <h2>May 3rd, 2020</h2>
                            <Link to="/affiliates/add" class="btn">Add</Link>
                        </div>
                        {clientes.map(cliente =>(
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Codigo</td>
                                    <td>Age</td>
                                    <td>Weight</td>
                                    <td>Height</td>
                                    <td>BMI</td>
                                    <td>Subscription</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.codigo}</td>
                                    <td>{cliente.age}</td>
                                    <td>{cliente.peso}</td>
                                    <td>{cliente.altura}</td>
                                    <td>{cliente.BMI}</td>
                                    <td>{cliente.fecha_registro}</td>
                                    <td><Link to={deleteCliente(cliente.id)}><ion-icon name="close-outline"></ion-icon></Link></td>
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
