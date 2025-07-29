import React, { useState } from "react";
import classes from '../../Styles/cart.module.scss';



const Summary = ({ total, cartItems}) => {
const [cep, setCep] = useState("");
const [frete, setFrete] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

const formatCep = (value) => {
  return value.replace(/\D/g, '')
  .replace(/(\d{5})(\d)/, "$1-$2")
  .replace(/(-\d{3})\d+?$/, "$1");
};

const calcularFrete = async () => {
  if (!cep || cep.length < 9) {
    setError("CEP inválido");
    return;
  }
  setLoading(true);
  setError(null);

  const token = process.env.MELHOR_ENVIO_TOKEN;

}
  return (
    <>
    
    </>    
  );
};

export default Summary;
