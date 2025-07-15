import React from "react";
import PageHeaderHome from "../layout/Home/PageHeaderHome";
import FooterHome from "../layout/Home/FooterHome";
import BannerContent from "../layout/products/BannerContent";
import ProductsConteiner from "../layout/products/ProductsConteiner";
import Paginação from "../layout/products/Paginação";
import classes from '../Styles/products.module.scss';

function products() {
  return (
    <>
      <PageHeaderHome />
        <div className={classes.separator}></div>
      <div className={classes.productsPage}>
        <BannerContent/>
        <ProductsConteiner/>
        <Paginação/>
      </div>
     
    <FooterHome />
    </>
    
  );
}

export default products;