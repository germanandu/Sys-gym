import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import img2 from'./img/Logo Completo.png'
import img3 from'./img/Language.png'
import img4 from'./img/Logo.png'
import { useAuth  } from "../contexts/AuthContext";

export default function Login() {
    const [email,setEmail] = useState('');
    const [clave,setClave] = useState('');
    const [loading,setLoading] = useState(false);
    const {login} = useAuth()
    const navigate = useNavigate();

    const sign_in = async () =>{
        setLoading(true)
        await login(email,clave);
        setLoading(false)
        navigate('/home')
        }
    return (
        <div className="body-signup">
         
            <div className="login__header">
                <img src={img2} alt="Logo" className="logo"/>
                <div className="sign__in__button">
                    <Link to="/signup" className="link">Sign in</Link>
                    <img src={img3} alt="Logo" className="language"/>
                </div>
            </div>

            
            <form className="box" action="" method="post">
                <img src={img4} alt="Logo"/>
                <h1>Log in</h1>
                <h2>Log in and start managing your gym!</h2>
                <input 
                    onChange={(ev)=> setEmail(ev.target.value)}
                    value={email.email} 
                    type="email" name="email" 
                    placeholder="E-mail"/>
                <input 
                    onChange={(ev)=> setClave(ev.target.value)}
                    value={clave.clave} 
                    type="password" name="clave" 
                    placeholder="Password"/>
                <div className="other__options">
                    <label>
                        <input type="checkbox" /> 
                        <span className="checkbox__text"> Remember me </span>
                    </label>
                    <Link to="/landing" className="link">Forgot password?</Link>
                </div>
                    <input onClick={sign_in} disabled={loading} type="button" value="Log in" />
            </form>
    </div>
    )
}
