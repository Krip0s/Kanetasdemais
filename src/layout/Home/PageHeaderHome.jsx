import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/PageHeader.module.scss';
import User from "../../Pages/User";
import products from '/src/Pages/products';
import cart from '/src/Pages/cart';

function PageHeaderHome() {
  const [menuActive, setMenuActive] = useState(false);


  const toggleMenu = () => setMenuActive(!menuActive);

  

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
            
            <div className={classes.menuToggle} onClick={toggleMenu}></div>
            
            <ul className={`${classes.menu} ${menuActive ? classes.active : ""}`}>
              <div className={classes.busca}>
                <input type="text" placeholder="Buscar produtos..." />
                <button className={classes.buscaBtnHeader}>Buscar</button>
              </div>
            
              <li><Link to="/products" className={classes.btnproducts}>Ver produtos</Link></li>
              
              <li><Link to="/cart" className={classes.cart}><i className="bx bx-cart"></i></Link></li>
              <li><Link to="/User" className={classes.User}><i className='bx bx-user'></i></Link></li>
              </ul>
              
            
          </nav>
        </div>
      </header>

      
    </>
  );
}

export default PageHeaderHome;