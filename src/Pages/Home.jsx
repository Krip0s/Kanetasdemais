import React from "react";
import Slider from "../layout/Home/Slider";
import ProdutosMain from "../layout/Home/ProdutosMain";
import SobreLoja from "../layout/Home/SobreLoja";
import PageHeaderHome from "../layout/Home/PageHeaderHome";
import classes from '../Styles/style.module.scss';
import FooterHome from "../layout/Home/FooterHome";
import Aside from "../layout/Home/Aside";



function Home() {
  return (
    <div className={classes.homePage}>
      <PageHeaderHome />
      <Slider />
      <Aside />
      <ProdutosMain />
      <SobreLoja />
      <FooterHome />
    </div>
  );
}

export default Home;
