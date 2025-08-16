import React, { useState } from "react";
import classes from '../../Styles/cart.module.scss';


const Summary = ({ total, cartItems}) => {
const [cep, setCep] = useState("");
const [frete, setFrete] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const apiKey = import.meta.env.VITE_BLING_API_KEY;
const token = import.meta.env.VITE_MELHOR_ENVIO_TOKEN;


const formatCep = (value) => {
  return value.replace(/\D/g, '')
  .replace(/(\d{5})(\d)/, "$1-$2")
  .replace(/(-\d{3})\d+?$/, "$1");
};

const handleCepChange = (e) => {
  const value = e.target.value;
  setCep(formatCep(value));
};





const calcularFrete = async () => {
  if (!cep || cep.length < 9) {
    setError("CEP inválido");
    return;
  }
  setLoading(true);
  setError(null);

 try{
  const produtos = cartItems.map(item => ({
name: item.name,
quantity: item.quantity,
unitary_value: MAth.round(item.price * 100),
weight: 0.3,
width: 10,   
height: 10,  
length: 10  
 }));

const body = {
        from: {
          postal_code: "13084-764", // CEP de origem (substitua pelo seu)
        },
        to: {
          postal_code: cep.replace(/-/, ''), // Remove o hífen
        },
        products: produtos,
        services: ["1", "2", "3"], // Sedex, PAC e Melhor Envio
      };

const response = await fetch("https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_MELHOR_ENVIO_TOKEN}`,
          "Accept": "application/json",
        },
        body: JSON.stringify(body),
      });

 const data = await response.json();


if (response.ok && Array.isArray(data)) {
        setFrete(data[0]); // Usa o primeiro frete retornado
      } else {
        setError("Erro ao calcular frete. Verifique o CEP e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao calcular frete:", error);
      setError("Erro ao conectar com o serviço de frete.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className={classes.box}>
        <header className={classes.HeaderResumo}>Resumo da Compra</header>
        <div className={classes.info}>
          <div>
            <span>Sub-total</span> <span>R$ {total?.toFixed(2)}</span>
          </div>
          <div className={classes.frete}>
            <input
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={handleCepChange}
              className={classes.cepInput}
              maxLength="9"
            />
            <button 
              onClick={calcularFrete}
              disabled={loading || !cep || cep.length < 9}
            >
              {loading ? "Calculando..." : "Calcular Frete"}
            </button>
          </div>
          {error && <div className={classes.error}>{error}</div>}
          <div>
            <span>Frete: </span>
            <span>
              {frete
                ? `R$ ${(frete.price / 100).toFixed(2)} - ${frete.delivery_time} dias úteis`
                : "Informe seu CEP"}
            </span>
          </div>
          <div>
            <button className={classes.coupon}>
              Cupom de desconto
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        <footer>
          <div>
            <span>Total: </span>
            <span>
              R$ {frete ? (total + (frete.price / 100)).toFixed(2) : total?.toFixed(2)}
            </span>
          </div>
        </footer>
      </div>
      <button className={classes.finalizarCompra}>Finalizar Compra</button>
    </>    
  );
};

export default Summary;
