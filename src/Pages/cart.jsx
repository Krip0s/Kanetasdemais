import React, { useState } from "react";
import PageHeader from "../layout/cart/PageHeader";
import PageTitle from "../layout/cart/PageTitle";
import Summary from "../layout/cart/Summary"; 
import TableRow from "../layout/cart/TableRow";
import classes from '../Styles/cart.module.scss'; 
import Footercart from "../layout/cart/Footercart";

function cart() {
  // Estado inicial do cart
  const initialCart = [
    {
      id: 1,
      name: "Caderno Universitário",
      category: "Papelaria",
      price: 24.90,
      quantity: 2,
      image: "https://picsum.photos/id/1/100/120"
    },
    {
      id: 2,
      name: "Conjunto de Canetas",
      category: "Escrita",
      price: 15.50,
      quantity: 1,
      image: "https://picsum.photos/id/2/100/120"
    },
    {
      id: 3,
      name: "Caderno Inteligente",
      category: "Escrita",
      price: 49.99,
      quantity: 1,
      image: "https://picsum.photos/id/3/100/120"
    }
  ];

  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Função para resetar o cart ao estado inicial
  const resetCart = () => {
    setCart([...initialCart]);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const frete = 0;
  const total = subtotal + frete;

  return (
    <div className={classes.cartPage}>
      <PageHeader />
      
      {/* Botão de Debug */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button 
          onClick={resetCart}
          style={{
            padding: '10px 15px',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e64a19'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
        >
          Debug: Recarregar Itens
        </button>
      </div>
      
      <main>
        <PageTitle />
        <div className={classes.content}>
          <section>
            <table>
              <thead>
                <tr>
                  <th><span>Produto</span></th>
                  <th><span>Preço</span></th>
                  <th><span>Quantidade</span></th>
                  <th><span>Total</span></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <TableRow 
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan="5" className={classes.Empty}>
                      <b>cart Vazio</b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary total={total} />
          </aside>
        </div>
      </main>
      <Footercart/>
    </div>
  );
}

export default cart;