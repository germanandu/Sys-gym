import React from 'react'
import { Link } from "react-router-dom";
import './css/landing.css';
import img1 from './img/ilustracion1.svg'
import img2 from './img/ilustracion.svg'
import germanImg from './img/german.jpeg'
import pipeImg from './img/pipe.jpeg'
import grefImg from './img/gref.jpeg'

export default function LandingPage() {
    const stylehero1 = {
        height: '150px',
        overflow: 'hidden'
    }
    const stylehero2 = {
        height: '100%',
        width: '100%'
    }
    const stylehero3 = {
        stroke: 'none',
        fill: '#fff'
    }
    const stylehero4 = {
        stroke: 'none',
         fill: '#054758'
    }
    return (
        <div className="body">
            <header className="hero">
                <div className="textos-hero">
                    <h1>Bienvenido a SysGym</h1>
                    <p>La mejor herramienta para tu Gym</p>
                    <Link className="cta" to="signup">Haz parte</Link>
                </div>
                <div className="svg-hero" style={stylehero1}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                        style={stylehero2}>
                        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                            style={stylehero3}></path>
                    </svg></div>
            </header>


            <section className="wave-contenedor website">
                <img src={img1} alt="ordenFinanzas"/>
                <div className="contenedor-textos-main">
                    <h2 className="titulo left">Lleva un orden de tus finanzas</h2>
                    <p className="parrafo">Con SysGym podras llevar un control de tus ingresos y gastos</p>
                    <Link to="signup" className="cta">Haz parte</Link>
                </div>
            </section>

            <section className="info">
                <div className="contenedor">
                    <h2 className="titulo left">Se parte de nuestro equipo!</h2>
                    <p>Conoce a nuestro equipo </p>
                    <article className="galeria-cont2">
                        <a href="https://www.instagram.com/germananduquia/"><img id="imgGerman" alt="german" src={germanImg} /></a>
                        <a href="https://www.instagram.com/felipevalencia4/"><img  alt="felipe" src={pipeImg} /></a>
                        <a href="https://www.instagram.com/sysgym6/"><img  alt="gref" src={grefImg} /></a>
                    </article>
                    <div className="galeria-cont2">
                        <label for="imgGerman">German Anduquia</label>
                        <label for="felipe">Manuel Felipe Valencia</label>
                        <label for="gref">Juan David Ramirez</label>
                    </div>
                </div>
            </section>

            <section className="cards contenedor">
                <h2 className="titulo">Nuestros servicios</h2>
                <div className="content-cards">
                    <article className="card">
                        <i className="far fa-clone"></i>
                        <h3>Control</h3>
                        <p>Con SysGym podras llevar un control completo de tu Gym</p>
                        <Link to="signup" className="cta">Haz parte</Link>
                    </article>
                    <article className="card">
                        <i className="fas fa-database"></i>
                        <h3>Almacenamiento</h3>
                        <p>Podras almacenar todo tipo de registros en nuestra Cloud</p>
                        <Link to="signup" className="cta">Haz parte</Link>
                    </article>
                    <article className="card">
                        <i className="far fa-object-group"></i>
                        <h3>Visualización</h3>
                        <p>Podras visualizar tus gastos, ingresos, maquinaria y clientes</p>
                        <Link to="signup" className="cta">Haz parte</Link>
                    </article>
                </div>
            </section>

            <section className="galeria">
                <div className="contenedor">
                    <h1 className="titulo">Siguenos en:</h1>
                    <article className="galeria-cont">
                        <a href="https://www.instagram.com/sysgym6/"><img  alt="Instagram" src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" /></a>
                        
                    </article>
                </div>
            </section>

            <section className="info-last">

                <div className="contenedor last-section">
                    <div className="contenedor-textos-main">
                        <h2 className="titulo left">Diferentes Herramientas</h2>
                        <p className="parrafo">En SysGym te brindaremos diferentes herramientas para poder llevar un control de tu Gym</p>
                        <Link to="signup" className="cta">Haz parte</Link>
                    </div>
                    <img src={img2} alt="" />
                </div>
                
                <div className="svg-wave" style={stylehero1}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={stylehero2}>
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={stylehero4}></path>
                </svg></div>
            </section>

            <footer id="contacto">
                <div className="contenedor">
                    <h2 className="titulo">Dejanos tus dudas, comentarios y opiniones</h2>
                    <div action="" className="form">
                        <input className="input"  type="text" name="" id="" placeholder="Nombre"/>
                        <input className="input"  type="email" name="" id="" placeholder="Email"/>
                        <textarea  className="input" name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                        <input className="input"  type="submit" value="Enviar"/>
                    </div>
                </div>
            </footer>
        </div>
    )
}
