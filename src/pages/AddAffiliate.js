import React,{useState} from 'react'
import Navbar from '../components/navbar'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

export default function AddAffiliate() {
    const initialStateValues = {
        nombre: '',
        codigo: '',
        edad: '',
        peso: '',
        altura: '',
        BMI: '',
        fecha_registro: '',
        estado: true,
        monto: 0
    };
    const [values, setValues] = useState(initialStateValues);
    const navigate = useNavigate();
    const {createCollection} = useAuth();

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
            //createCliente();
            console.log(values)
            navigate('/affiliates');
        } else {
          alert("Campos sin rellenar");
        }
        setValues({ ...initialStateValues });
    };
    return (
        <div className="container">
            <Navbar/>
            <div className="main">
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Add new client</h2>
                            <Link to="/" className="btn">Add</Link>
                        </div>
                        <input onChange={handleInputChange} value={values.nombre} type="text" name="nombre" placeholder="Nombre"/>
                        <input onChange={handleInputChange} value={values.codigo} type="number" name="codigo" placeholder="Cedula"/>
                        <input onChange={handleInputChange} value={values.edad} type="text" name="edad" placeholder="Edad"/>
                        <input onChange={handleInputChange} value={values.peso} type="text" name="peso" placeholder="Peso"/>
                        <input onChange={handleInputChange} value={values.altura} type="text" name="altura" placeholder="Altura"/>
                        <input onChange={handleInputChange} value={values.BMI} type="text" name="BMI" placeholder="BMI"/>
                        <input onChange={handleInputChange} value={values.fecha_registro} type="date" name="fecha_registro" />
                        <input onClick={handlesubmit} type="button" value="Confirm"/>

                    </div>
                </div>
            </div>
        </div>
    )
}
