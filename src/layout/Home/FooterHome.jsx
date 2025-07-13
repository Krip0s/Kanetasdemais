import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import classes from '../../Styles/style.module.scss';

function FooterHome() {
  const [showSobreModal, setShowSobreModal] = useState(false);
  const [showContatoModal, setShowContatoModal] = useState(false);

  const toggleModal = (modalType) => {
    if (modalType === "sobreModal") setShowSobreModal(!showSobreModal);
    else if (modalType === "contatoModal") setShowContatoModal(!showContatoModal);
  };

  return (
    <>
      <footer className={classes.footer}>
        <div className={`${classes.container} ${classes.footerContainer}`}>
          <div className={classes.footerSecao}>
            <h3>Kanetas D+</h3>
            <p>Sua loja completa de materiais escolares e de escritório e artesanato.</p>
          </div>

          <div className={classes.footerSecao}>
            <h3>Links Rápidos</h3>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/Produtos" className={classes.btnProdutosFooter}>Ver Produtos</Link></li>
              <li><Link to="/Produtos">Promoções</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); toggleModal("sobreModal"); }}>Sobre Nós</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); toggleModal("contatoModal"); }}>Contato</a></li>
            </ul>
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

      {showSobreModal && (
              <div className={classes.modal}>
                <div className={classes.modalContent}>
                  <span className={classes.closeModal} onClick={() => toggleModal("sobreModal")}>&times;</span>
                  <h1>Sobre Nós</h1>
                  <p>A Kanetas D+ está no mercado há mais de 10 anos, oferecendo produtos de qualidade para estudantes,
                      profissionais e entusiastas de artesanato.</p>
                  <p>Nosso compromisso é proporcionar a melhor experiência de compra, com atendimento personalizado e preços
                      justos.</p>
                </div>
              </div>
            )}
      
            {showContatoModal && (
              <div className={classes.modal}>
                <div className={classes.modalContent}>
                  <span className={classes.closeModal} onClick={() => toggleModal("contatoModal")}>&times;</span>
                 <h1>Entre em Contato</h1>
                  <p>Email: Kanetas.D+@gmail.com.br</p>
                  <p>Telefone: (11) 5555-5555</p>
                  <p>Endereço: Rua das Flores, 123 - São Paulo, SP</p>
                </div>
              </div>
      )}
    </>
  );
}

export default FooterHome;
