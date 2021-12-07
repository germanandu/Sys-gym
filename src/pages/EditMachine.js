import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link,useNavigate,useParams} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import {db} from "../firebase"

export default function EditMachine() {
    const {keyword} = useParams()
    const {editcollection,currentUser} = useAuth();
    const initialStateValues = {
        nombre: '',
        ultimo_mantenimiento: '',
        descripcion: '',
        estado: true,
        gym_email: currentUser.email
    };
    const [values, setValues] = useState(initialStateValues);
    const navigate = useNavigate();

    const updateMaquina= () => {
        editcollection(values,keyword,'maquinas');
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handlesubmit  =  (e) => {
        e.preventDefault();
        if (values) {
            updateMaquina();
            console.log(values)
            navigate('/machines');
        } else {
          alert("Campos sin rellenar");
        }
        setValues({ ...initialStateValues });
    };
    const getMachines = () => {

        db.collection("maquinas").onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc)=>{
                if (doc.id === keyword) {
                    setValues(doc.data());
                }
            })
        });
    };

    useEffect(()=>{
        getMachines(); // eslint-disable-next-line
     },[]);
    return (
        <div>
            <div className="container2">
            <Navbar/>
            <div className="container">
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Edit machine</h2>
                            <Link to="/machines" className="btn">Cancel</Link>
                        </div>
                        <div className="" >
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="machineName">Nombre </label>
                                    <input id="machineName" className="form-control" onChange={handleInputChange} value={values.nombre} type="text" name="nombre" placeholder="Nombre" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="lastDateMachine">Fecha de ultimo mantenimiento </label>
                                    <input id="lastDateMachine" className="form-control" onChange={handleInputChange} value={values.ultimo_mantenimiento} type="date" name="ultimo_mantenimiento" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea className="form-control" onChange={handleInputChange} value={values.descripcion}  name="descripcion" placeholder="Descripcion" />
                                </div>
                            </div>
                            <div className="row">
                                <input className="btn" onClick={handlesubmit} type="button" value="Confirm"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}
