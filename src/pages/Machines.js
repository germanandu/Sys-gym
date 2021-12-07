import React, {useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link,useNavigate} from 'react-router-dom'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';

export default function Machines() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const {currentUser} = useAuth();
    const[maquinas,setMaquinas]=useState([]);
    const[nextMainteinance,setNextMainteinance]=useState('');
    const today = new Date()
    var dayName = days[today.getDay()];
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    function sumasDias(fecha,dias){
        fecha.setDate(fecha.getDate()+dias)
        return fecha
    }
    const getMaquinas = () => {
        
        db.collection("maquinas").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                if (doc.data().gym_email === currentUser.email) {
                let lastDate = new Date(doc.data().ultimo_mantenimiento)
                lastDate = sumasDias(lastDate,+30)
                const dateFinal = lastDate.getFullYear()+'-'+(lastDate.getMonth()+1)+'-'+lastDate.getDate();
                let elements = {
                    id:doc.id,
                    proximo_mantenimiento: dateFinal
                }
                docs.push({...doc.data(), ...elements});
                }
            })
            docs.sort(function(a,b){
                return a.nombre - b.nombre;
            })
            setMaquinas(docs);
        });
    };

    const deleteMaquina = async( id)=>{
        if (window.confirm('Estas seguro que deseas eliminar este maquina ?')){
             await db.collection('maquinas').doc(id).delete();
        }
     }
     useEffect(()=>{
        getMaquinas();
     },[]);
    return (
        <div className="container2">
            <Navbar/>
            <div className="container">
            
                <div class="details affiliates">
                    
                    <div class="recentOrders machines">
                        <div class="cardHeader">
                            <h2>{dayName} {date}</h2>
                            <h2>Machines</h2>
                            <Link to="/machines/add" class="btn">Add</Link>
                        </div>
                        {maquinas.map(maquina =>(
                        <table key={maquina.id}>
                            <thead>
                                <tr>
                                    
                                    <td>Name</td>
                                    <td>Last Mainteinance</td>
                                    <td>Next Mainteinance</td>
                                    <td>About</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{maquina.nombre}</td>
                                    <td>{maquina.ultimo_mantenimiento}</td>
                                    <td>{maquina.proximo_mantenimiento}</td>
                                    <td>{maquina.descripcion}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/machines-edit/${maquina.id}`}>Editar</Link>
                                        <button className="btn btn-danger" onClick={()=>deleteMaquina(maquina.id)}>Delete</button>
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
