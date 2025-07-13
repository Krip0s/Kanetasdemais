import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/produtos.module.scss';

function BannerContent() {
  

  return (
    <>
 <section className={classes.produtosBanner}>
        <div className={classes.bannerContent}>
            <h1>Nossos Produtos</h1>
            <p>Qualidade e variedade para todas as suas necessidades</p>
        </div>
    </section>
    </>
  );
}

export default BannerContent;