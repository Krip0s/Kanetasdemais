import React from "react";
import Slider from "../layout/Home/Slider";
import ProductsMain from "../layout/Home/ProductsMain";
import SobreLoja from "../layout/Home/SobreLoja";
import PageHeaderHome from "../layout/Home/PageHeaderHome";
import classes from '../Styles/style.module.scss';
import FooterHome from "../layout/Home/FooterHome";
import AsideCategorias from "../layout/Home/AsideCategorias";
import AsideLoja from "../layout/Home/AsideLoja";
import ModalPremio from "../layout/Home/ModalPremio";



function Home() {
  return (
    <>
      <div className={classes.homePage}>
        <ModalPremio />
        <PageHeaderHome />
        <Slider />
        <AsideCategorias />
        <AsideLoja />
        <ProductsMain />
        <SobreLoja />
      </div>
      <FooterHome />
    </>

  );
}

export default Home;
