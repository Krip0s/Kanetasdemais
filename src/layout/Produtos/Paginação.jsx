import React from "react";
import classes from '../../Styles/produtos.module.scss';

function Paginacao() {
  return (
    <div className={classes.paginacao}>
      <div className={classes.paginaAtiva}>1</div>
      <div className={classes.pagina}>2</div>
      <div className={classes.pagina}>3</div>
      <div className={classes.pagina}>4</div>
      <div className={classes.pagina}>»</div>
    </div>
  );
}

export default Paginacao;