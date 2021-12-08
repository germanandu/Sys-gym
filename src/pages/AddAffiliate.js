import React,{useState} from 'react'
import Navbar from '../components/navbar'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

export default function AddAffiliate() {
    const {createCollection,currentUser} = useAuth();
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

    const createCliente= () => {
        createCollection(values,'clientes');
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handlesubmit  =  (e) => {
        e.preventDefault();
        if (values) {
            createCliente();
            console.log(values)
            navigate('/affiliates');
        } else {
          alert("Campos sin rellenar");
        }
        setValues({ ...initialStateValues });
    };
    return (
        <div className="container2">
            <Navbar/>
            <div className="main">
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Add new client</h2>
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
