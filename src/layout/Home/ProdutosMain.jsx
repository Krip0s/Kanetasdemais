import React from "react";
import classes from '../../Styles/style.module.scss';

const ProdutosMain = () => {
  return (
    <section className={`${classes.produtos} ${classes.container}`}>
      <h2>Produtos em Destaque</h2>
      <div className={classes.produtosGrid}>
        {[1, 2, 3, 4].map((i) => (
          <div className={classes.produto} key={i}>
            <div className={classes.produtoImg}>
              <img src={`https://picsum.photos/200/200?random=${i + 3}`} alt={`Produto ${i}`} />
            </div>
            <div className={classes.produtoInfo}>
              <div className={classes.produtoNome}>Produto {i}</div>
              <div className={classes.produtoPreco}>R$ {20 + i * 5},00</div>
              <a href="#" className={classes.btn}>Comprar</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProdutosMain;
