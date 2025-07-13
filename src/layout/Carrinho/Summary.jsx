import React from "react";  
import classes from '../../Styles/carrinho.module.scss';
const Summary = ({ total }) => {
  return (
    <>
      <div className={classes.box}>
        <header className={classes.HeaderResumo}>Resumo da Compra</header>
        <div className={classes.info}>
          <div>
            <span>Sub-total</span> <span>R$ {total?.toFixed(2)}</span>
          </div>
          <div>
            <span>Frete</span> <span>Grátis</span>
          </div>
          <div>
            <button className={classes.coupon}>
              Cupom de desconto
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        <footer>
          <div>
            <span>Total:</span>
            <span>R$ {total?.toFixed(2)}</span>
          </div>
        </footer>
      </div>
      <button className={classes.finalizarCompra}>Finalizar Compra</button>
    </>
  );
};

export default Summary;