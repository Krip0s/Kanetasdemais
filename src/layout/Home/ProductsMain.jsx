import React, { useState, useEffect } from "react";
import classes from '../../Styles/style.module.scss';
import AddToCartButton from "../cart/AddToCartButton";

const ProductsMain = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {



    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Garante que sempre será um array
        const productsArray = Array.isArray(data) ? data : [];
        setProducts(productsArray);
        
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setError(error.message);
        setProducts([]); // Fallback para array vazio
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className={classes.loading}>Carregando produtos...</div>;
  }

  if (error) {
    return <div className={classes.error}>Erro ao carregar produtos: {error}</div>;
  }

  // Produtos em destaque (primeiros 4)
  const featuredProducts = products
    .filter(product => product.stock > 0)
    .slice(0, 4);

  return (
    <section className={`${classes.products} ${classes.container}`}>
      <h2>Produtos em Destaque</h2>
      {featuredProducts.length === 0 ? (
        <div>Nenhum produto disponível no momento.</div> // Mensagem atualizada
      ) : (
        <div className={classes.productsGrid}>
          {featuredProducts.map((product) => (
            <div className={classes.produto} key={product.id}>
              <div className={classes.produtoImg}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200?text=Imagem+Indisponível';
                  }}
                />
              </div>
              <div className={classes.produtoInfo}>
                <div className={classes.produtoNome}>{product.name}</div>
                <div className={classes.produtoPreco}>
                  R$ {Number(product.price).toFixed(2)}
                </div>
                <AddToCartButton 
                  item={product} 
                  onAddToCart={onAddToCart} 
                  className={classes.btn}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsMain;