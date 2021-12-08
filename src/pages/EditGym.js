import React, {useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import {Link,useNavigate} from 'react-router-dom'
import {db} from "../firebase"
import { useAuth } from '../contexts/AuthContext';

export default function EditGym() {

    const {editcollection,currentUser} = useAuth();
    const [id,setId] = useState();
    const [values, setValues] = useState({});
    const navigate = useNavigate();

    const updateGym= () => {
        editcollection(values,id,'gyms');
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handlesubmit  =  (e) => {
        e.preventDefault();
        if (values) {
            updateGym();
            console.log(values)
            navigate('/settings');
        } else {
          alert("Campos sin rellenar");
        }
    };
    const getGyms = () => {

        db.collection("gyms").onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc)=>{
                if (doc.data().email_dueño === currentUser.email) {
                    setValues(doc.data());
                    setId(doc.id);
                }
            })
        });
    };

    useEffect(()=>{
        getGyms(); // eslint-disable-next-line
     },[])
    return (
        <div>
            <div className="container2">
            <Navbar/>
            <div className="main">
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Edit Gym</h2>
                            <Link to="/settings" className="btn">Cancel</Link>
                        </div>
                        <div className="" >
                            <div className="row">
                                <div className="col-6">
                                    <label >Nombre Gym </label>
                                    <input  className="form-control" onChange={handleInputChange} value={values.nombre} type="text" name="nombre" placeholder="Nombre" />
                                </div>
                                <div className="col-6">
                                    <label >Direccion </label>
                                    <input  className="form-control" onChange={handleInputChange} value={values.direccion} type="text" name="direccion" placeholder="Direccion" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label >Email Dueño </label>
                                    <input className="form-control" onChange={handleInputChange} value={values.email_dueño}  name="email_dueño" disabled/>
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
