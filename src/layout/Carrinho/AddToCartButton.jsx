import React from "react";

const AddToCartButton = ({ item, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(item);
  };

  return (
    <button 
      onClick={handleClick}
      type="button"
      aria-label={`Adicionar ${item.name} ao carrinho`}
    >
      Adicionar ao Carrinho
    </button>
  );
};

export default AddToCartButton;