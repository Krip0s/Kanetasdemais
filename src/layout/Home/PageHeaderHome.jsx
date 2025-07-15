import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/style.module.scss';
import Login from "../../Pages/Login";
import products from '/src/Pages/products';
import cart from '/src/Pages/cart';

function PageHeaderHome() {
  const [menuActive, setMenuActive] = useState(false);
  const [showSobreModal, setShowSobreModal] = useState(false);
  const [showContatoModal, setShowContatoModal] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  const toggleModal = (modalType) => {
    if (modalType === "sobreModal") setShowSobreModal(!showSobreModal);
    else if (modalType === "contatoModal") setShowContatoModal(!showContatoModal);
  };

  return (
    <>
      <header className={classes.headerHome}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            
            <Link to="/" className={classes.logo}>
              <img 
                src="https://i.postimg.cc/hXTdmLCs/oie-Kviwcce-NPrup-waifu2x-art-noise1-scale-removebg-preview-waifu2x-art-noise2-scale.png" 
                alt="Kanetas D+ Logo" 
                className={classes.logoImage}
              />
            </Link>
            
            <div className={classes.menuToggle} onClick={toggleMenu}>☰</div>
            
            <ul className={`${classes.menu} ${menuActive ? classes.active : ""}`}>
              <div className={classes.busca}>
                <input type="text" placeholder="Buscar produtos..." />
                <button className={classes.buscaBtnHeader}>Buscar</button>
              </div>
              <li><Link to="/products" className={classes.btnproducts}>Ver produtos</Link></li>
              
              <li><Link to="/cart" className={classes.cart}><i className="bx bx-cart"></i></Link></li>
              <li><Link to="/login" className={classes.login}><i className='bx bx-user'></i></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {showSobreModal && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <span className={classes.closeModal} onClick={() => toggleModal("sobreModal")}>&times;</span>
            <h1>Sobre Nós</h1>
            <p>A Kanetas D+ está no mercado há mais de 10 anos, oferecendo products de qualidade para estudantes,
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

export default PageHeaderHome;