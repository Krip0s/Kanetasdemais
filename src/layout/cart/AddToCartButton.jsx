import React from "react";
import classes from '../../Styles/style.module.scss';

const AddToCartButton = ({ item, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(item);
  };

  return (
    <button 
      onClick={handleClick}
      className={classes.btn}
      aria-label={`Adicionar ${item.name} ao carrinho`}
    >
      Adicionar ao carrinho
    </button>
  );
};

export default AddToCartButton;