import React from "react";
import Slider from "../layout/Home/Slider";
import ProductsMain from "../layout/Home/ProductsMain";
import SobreLoja from "../layout/Home/SobreLoja";
import PageHeaderHome from "../layout/Home/PageHeaderHome";
import classes from '../Styles/style.module.scss';
import FooterHome from "../layout/Home/FooterHome";
import AsideCategorias from "../layout/Home/AsideCategorias";
import AsideLoja from "../layout/Home/AsideLoja";




function Home() {
  return (
    <div className={classes.homePage}>
      <PageHeaderHome />
      <Slider />
      <AsideCategorias />
       <AsideLoja />
      <ProductsMain />
      <SobreLoja />
      <FooterHome />
    </div>
  );
}

export default Home;
