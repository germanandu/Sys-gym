import React, {useState} from 'react'
import './css/signup.css';
import logoCompleto from './img/Logo Completo.png'
import Language from './img/Language.png'
import logo from './img/Logo.png'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';


export default function Signup() {
    const initialStateValues = {
        nombre: '',
        email: '',
        clave: '',
        rol: '',
        gym_name: ''
    };
    const initialStateValues2 = {
        nombre: '',
        email_dueño: '',
        direccion: '',
        img: '',
        maquinas: ''
    };

    const [values, setValues] = useState(initialStateValues);
    const [gyms, setGyms] = useState(initialStateValues2);
    const [loading,setLoading] = useState(false);
    const {signup} = useAuth();
    const [clave2,setClave2] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "clave2") {
            setClave2(value);
            return
        }
        if (name === "email") {
            setGyms({...gyms, email_dueño: value });
        }
        if (name === "gym_name") {
            setGyms({...gyms, nombre: value });
        }
        setValues({ ...values, [name]: value });
    };

    const create_user = () => {
        signup(values.email,values.clave,values,gyms);
    };

    const handlesubmit  =  (e) => {
        setLoading(true)
        e.preventDefault();
        if (values.clave === clave2 && values.clave !== '' && values.email !==''&& clave2.length >= 6) {
          //create_user();
          console.log(values,gyms)
          navigate('/');
        } else {
          alert("Las contraseñas no son iguales / campos sin rellenar/ la constraseña debe ser mayor o igual a 6 caracteres");
        }
        setValues({ ...initialStateValues });
        setClave2('')
        setLoading(false)
    };

    return (
        <div className="body-signup"> 
            <div className="login__header">
                <img src={logoCompleto} alt="Logo" className="logo"/>
                <div className="sign__in__button">
                    <Link to="/login" className="link">Log in</Link>
                    <img src={Language} alt="Logo" className="language"/>
                </div>
            </div>

            <div className="box" >
                <img src={logo} alt="Logo"/>
                <h1>Sign up</h1>
                <input onChange={handleInputChange} value={values.email} type="email" name="email" placeholder="E-mail"/>
                <input onChange={handleInputChange} value={values.gym_name} type="text" name="gym_name" placeholder="Gym Name"/>
                <input onChange={handleInputChange} value={values.clave} type="password" name="clave" placeholder="Password"/>
                <input onChange={handleInputChange} value={clave2} type="password" name="clave2" placeholder="Confirm password"/>
                <div className="other__options">
                    <h2>Sign up</h2>
                </div>
                <input disabled={loading} onClick={handlesubmit} type="button" value="Sign in"/>
                
            </div>
        </div>
        
    )
}
