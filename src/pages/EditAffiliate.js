import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link,useNavigate,useParams} from 'react-router-dom'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';

export default function EditAffiliate() {
    const {keyword} = useParams()
    const {editcollection,currentUser} = useAuth();
    const initialStateValues = {
        nombre: '',
        codigo: '',
        edad: '',
        peso: '',
        altura: '',
        BMI: '',
        fecha_registro: '',
        estado: true,
        monto: 0,
        gym_email: currentUser.email
    };
    const [values, setValues] = useState(initialStateValues);
    const navigate = useNavigate();

    const updateCliente= () => {
        editcollection(values,keyword,'clientes');
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handlesubmit  =  (e) => {
        e.preventDefault();
        if (values) {
            updateCliente();
            console.log(values)
            navigate('/affiliates');
        } else {
          alert("Campos sin rellenar");
        }
        setValues({ ...initialStateValues });
    };
    const getClientes = () => {

        db.collection("clientes").onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc)=>{
                if (doc.id === keyword) {
                    setValues(doc.data());
                }
            })
        });
    };

    useEffect(()=>{
        getClientes(); // eslint-disable-next-line
     },[]);
    return (
        <div className="container2">
            <Navbar/>
            <div className="container">
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Edit client</h2>
                            <Link to="/affiliates" className="btn">Cancel</Link>
                        </div>
                        <div className="" >
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="">Nombre</label>
                                <input className="form-control" onChange={handleInputChange} value={values.nombre} type="text" name="nombre" placeholder="Nombre"/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Cedula</label>
                                <input className="form-control" onChange={handleInputChange} value={values.codigo} type="number" name="codigo" placeholder="Cedula"/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Edad</label>
                                <input className="form-control" onChange={handleInputChange} value={values.edad} type="text" name="edad" placeholder="Edad"/>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Peso</label>
                                <input className="form-control" onChange={handleInputChange} value={values.peso} type="text" name="peso" placeholder="Peso"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="">Altura</label>
                                <input className="form-control" onChange={handleInputChange} value={values.altura} type="text" name="altura" placeholder="Altura"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">BMI</label>
                                <input className="form-control" onChange={handleInputChange} value={values.BMI} type="text" name="BMI" placeholder="BMI"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">Fecha de subscripcion</label>
                                <input className="form-control" onChange={handleInputChange} value={values.fecha_registro} type="date" name="fecha_registro" />
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
    )
}
