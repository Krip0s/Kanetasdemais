import React from "react";
import { Link } from "react-router-dom";
import classes from '../../Styles/cart.module.scss';

const PageHeader = () => {
  return (
    <header className={classes.cartHeader}>
      <div className={classes.containerHeader}>
        <nav>
          <div className={classes.logo}>Carrinho de Compras</div>
          <div className={classes.menuToggle} onClick={() => console.log('Menu clicked')}>
            <i className="fas fa-bars"></i>
          </div>
          <ul className={classes.menu}>
            <li>
              <Link to="/"><i className="bx bx-chevron-left"></i>Voltar</Link>
            </li>
          </ul>
          

        </nav>
      </div>
    </header>
  );
};

export default PageHeader;