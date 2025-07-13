import React from "react";
import classes from '../../Styles/FooterCarrinho.module.scss';

function FooterCarrinho() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.container} ${classes.footerContainer}`}>
        <div className={classes.footerSecao}>
          <h3>Kanetas D+</h3>
          <p>Sua loja completa de materiais escolares e de escritório e artesanato.</p>
        </div>

        <div className={classes.footerSecao}>
          <h3>Horário de Funcionamento</h3>
          <ul>
            <li>Segunda a Sexta: 9h às 18h</li>
            <li>Sábados: 9h às 13h</li>
            <li>Domingos e Feriados: Fechado</li>
          </ul>
        </div>
      </div>

      <div className={`${classes.container} ${classes.copyright}`}>
        <p>&copy; 2025 Kanetas D+. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default FooterCarrinho;
