import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link,useNavigate,useParams} from 'react-router-dom'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';

export default function EditFinances() {
    const {keyword} = useParams()
    const {editcollection} = useAuth();
    const [values, setValues] = useState({});
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
            navigate('/finances');
        } else {
          alert("Campos sin rellenar");
        }
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
                        <div className="container " >
                        <div className="row text-center">
                            <div className="col-6">
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
