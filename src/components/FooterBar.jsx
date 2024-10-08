import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from "./footerBar.module.css";

function FooterBar() {

    return (
        <footer className={styles.piepagina} >
        <div className={styles.grupo1}>
            <div className={styles.box}>
            <figure>
                <Link to="/contact"><img src="contacto.png" alt="Logo grupo 8" /></Link>
            </figure>
            </div>
            <div className={styles.box}>
            <h2>SOBRE NOSOTROS</h2>
            <p>
                Con mucho esfuerzo y empeño, realizamos esta Website, para ser
                disfrutada por todos.
            </p>
            <p>
                Si debuggear es el proceso de remover errores de código entonces
                programar debe ser el proceso de ponerlos .- Edsger Dijkstra
            </p>
            </div>
            <div className={styles.box}>
            <h2>SIGUENOS</h2>
            <div className={styles.redsocial}>
                <a href="https://www.facebook.com/" className="fa fa-facebook"><span className={styles.nada}>.</span></a>
                <a href="https://www.instagram.com/" className="fa fa-instagram"><span className={styles.nada}>.</span></a>
                <a href="https://x.com/" className="fa fa-twitter"><span className={styles.nada}>.</span></a>
                <a href="https://www.youtube.com/" className="fa fa-youtube"><span className={styles.nada}>.</span></a>
            </div>
            </div>
        </div>
        <div className={styles.grupo2}>
            <small>&copy; 2024 <b>Trabajo hecho para UPATECO Prog·3 </b> - Todos los Derechos
            Reservados.</small>
        </div>
    </footer>
    );
}

export default FooterBar;