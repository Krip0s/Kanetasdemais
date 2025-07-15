import React, { useState } from "react";
import classes from '../../Styles/cart.module.scss';

const Summary = ({ total }) => {
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState(null);

  const calcularFrete = async () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjI5ODAwNzA4NGNhNTU4NGM0MGQ0YjJlYmZkMGVmMDczMzFjZmUzNjBlYTBhY2EwMzUyMjVjZjU4MTJlNjVlMmNkNGFjZjk1YWNkZjU3NDEiLCJpYXQiOjE3NTI1MTYwODkuODYyODU5LCJuYmYiOjE3NTI1MTYwODkuODYyODYsImV4cCI6MTc4NDA1MjA4OS44NTAxMTQsInN1YiI6IjlmM2RlNjc4LThhZGYtNDAxMy1hNWQ3LWIwNjU2Mzk3NDRiOCIsInNjb3BlcyI6WyJzaGlwcGluZy1jYWxjdWxhdGUiXX0.jII8chBjw6DJBNZyG-AnsNQtG7rujyQZWdOLJohS3bM5MH4dU5QPn_VRviVU0ibSQVN6JWy3WvKH1qoFDqm1a_btrsVXqnhfwcBXqm8EfAfNKqwGYd7yGy4-SbStreYzOUMIcsvvPjY0yCzOTstOX56eWW3SjJ6mrioG05alroa9pU1ryqquJUm3T0CxGRMNTX6qmReH4SDWwcmjGENMEC80mgWh28Y1r1qXZfs0ZMtLHcv00M9vpl176hPqnoxjDjm-GPN_uWzWQamo9XJfTbeLECbpRAVwrI4b9ZngaDCZNCpjTRvVoc62_s6_EzNCeUROaD5_c6m4sNWFOiS1OVvYz8QpNuNDOZuVyOj1Ho7d0cAw8zYWi6hu66gDCV0C7gU2qHS2fykp7jx_i9Y91jLDzHh52sBEeh2DlK3Q9p_MGszMdqFlODHiM_f3_HWbdZ-23cN2YE6aiwuED4A-P9GeD-kb3YGo-hei6AmHuf_oqyipe6lMW1ZAdsjtOveHS5Kd5EO2WGawx3aMANUr3TfCUYhYBmsEvOU6LPZkD650rD4qgoGgevlZSF0QYMg2cebURaHGH21wkKDJXzS9dgnidXyUQNx7hBMh5I-rXqzLQsQb7itjLcAX5xYj6vvPFbdEqybHM8FeTxHIZKLVnL8m-SkCzJbYREu64qJgzGk"

    const body = {
      from: {
        postal_code: "13084-764",
      },
      to: {
        postal_code: cep,
      },
      products: [
        {
          name: "Produto Exemplo",
          quantity: 1,
          unitary_value: 10000, // R$100,00 em centavos
          weight: 1,
          width: 10,
          height: 10,
          length: 10,
        },
      ],
      services: [1, 2, 3],
    };

    try {
      const response = await fetch("https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (Array.isArray(data)) {
        setFrete(data[0]); // usa o primeiro frete retornado
      }
    } catch (error) {
      console.error("Erro ao calcular frete:", error);
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
              onChange={(e) => setCep(e.target.value)}
              className={classes.cepInput}
            />
            <button onClick={calcularFrete}>Calcular Frete</button>
          </div>
          <div>
            <span>Frete: </span>
            <span>
              {frete
                ? `R$ ${(frete.price / 100).toFixed(2)} - ${frete.delivery_time} dias`
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
            <span>R$ {total?.toFixed(2)}</span>
          </div>
        </footer>
      </div>
      <button className={classes.finalizarCompra}>Finalizar Compra</button>
    </>
  );
};

export default Summary;
