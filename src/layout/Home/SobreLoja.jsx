import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/style.module.scss';

function PageHeaderHome() {
  

  return (
    <>

<section className={classes.sobre}>
        <div className={classes.sobreContainer}>
            <div className={classes.sobreImg}> <img src="https://i.ibb.co/JFHMPxjY/2025-02-01.jpg" alt=""/></div>
            <div className={classes.sobreTexto}>
                <h2>Sobre Nossa Papelaria</h2>
                <p>A Kanetas D+ está no mercado há mais de 10 anos, oferecendo products de qualidade para estudantes,
                    profissionais e entusiastas de artesanato.</p>
                <p>Nosso compromisso é proporcionar a melhor experiência de compra, com atendimento personalizado e
                    preços justos.</p>
            </div>
        </div>
    </section>



    </>
  );
}

export default PageHeaderHome;
