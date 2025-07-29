import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/style.module.scss';

function PageHeaderHome() {


  return (
    <>

      <section className={classes.sobre}>
        <div className={classes.sobreContainer}>
          <div className={classes.sobreImg}> <img src="https://i.ibb.co/JFHMPxjY/2025-02-01.jpg" alt="" /></div>
          <div className={classes.sobreTexto}>
            <h2>Sobre Nossa Papelaria</h2>
            <p> Kanetas D+ está no mercado há mais de 5 anos oferecendo produtos de qualidade para estudantes,
              profissionais e entusiastas de artesanato.
              Nosso compromisso vai além de vender: queremos que cada cliente se sinta bem atendido.
              Para isso, proporcionamos a melhor experiência de compra, com atendimento personalizado e preços justos.
              Aqui, você encontra grande variedade de produtos e marcas, atendimento próximo e atencioso,
              e a certeza de estar comprando de quem realmente se importa com você.</p>
          </div>
        </div>
      </section>



    </>
  );
}

export default PageHeaderHome;
