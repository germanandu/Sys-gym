import React, {useState,useEffect} from 'react'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';

export default function NextMainteinance() {
    
    const {currentUser} = useAuth();
    const[maquinas,setMaquinas]=useState([]);
    
    function sumasDias(fecha,dias){
        fecha.setDate(fecha.getDate()+dias)
        return fecha
    }
    const getMaquinas = () => {
        
        db.collection("maquinas").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                if (doc.data().gym_email === currentUser.email) {
                    if(docs.length>3)return
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
                return a.proximo_mantenimiento - b.proximo_mantenimiento;
            })
            setMaquinas(docs);
        });
    };

     useEffect(()=>{
        getMaquinas(); // eslint-disable-next-line
     },[]);
    return (
        <div className="recentCustomers">
            <div className="cardHeader">
                <h2>Next Mainteinance</h2>
            </div>
            {maquinas.map(maquina =>(
            <table>
                <tr>                                
                    <td><h4>{maquina.nombre}<br/><span>{maquina.proximo_mantenimiento}</span></h4></td>
                </tr>
            </table>
            ))}
        </div>
    )
}
