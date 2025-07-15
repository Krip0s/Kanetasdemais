import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/products.module.scss';

function BannerContent() {
  

  return (
    <>
 <section className={classes.productsBanner}>
        <div className={classes.bannerContent}>
            <h1>Nossos products</h1>
            <p>Qualidade e variedade para todas as suas necessidades</p>
        </div>
    </section>
    </>
  );
}

export default BannerContent;