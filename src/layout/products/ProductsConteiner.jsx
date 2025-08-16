import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Routes, Route, Link, useSearchParams, useNavigate } from "react-router-dom";
import classes from '../../Styles/productsContainer.module.scss';
import AddToCartButton from "../cart/AddToCartButton";
import Paginacao from "../products/Paginação";
import { CATEGORIES } from '../../constants/Categories';

function ProductsContainer({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('categoria') || 'all');
  const [sort, setSort] = useState('relevant');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const navigate = useNavigate(); // CORREÇÃO: mudado de Navigate para navigate (minúsculo)
  const categories = useMemo(() => CATEGORIES, []);

  // Opções de ordenação
  const sortOptions = useMemo(() => [
    { value: 'relevant', label: 'Mais Relevantes' },
    { value: 'price-low', label: 'Menor Preço' },
    { value: 'price-high', label: 'Maior Preço' },
    { value: 'name', label: 'Nome A-Z' },
    { value: 'name-desc', label: 'Nome Z-A' }
  ], []);

  // Fetch products com melhor tratamento de erro
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams({
        pagina: currentPage,
        categoria: filter !== 'all' ? filter : '',
        ordenacao: sort
      });

      const response = await fetch(`http://localhost:3000/api/products?${queryParams}`);
      
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();

      // Suporte para diferentes formatos de resposta da API
      if (Array.isArray(data)) {
        setProducts(data);
        setTotalProducts(data.length);
        setTotalPages(Math.ceil(data.length / 12)); // Assumindo 12 produtos por página
      } else if (data.products && Array.isArray(data.products)) {
        setProducts(data.products);
        setTotalProducts(data.total || data.products.length);
        setTotalPages(data.totalPages || Math.ceil(data.products.length / 12));
      } else {
        throw new Error('Formato de dados inválido recebido da API');
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setError(error.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, filter, sort]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Reset página quando filtro mudar
  useEffect(() => {
    const categoriaFromURL = searchParams.get('categoria') || 'all';
    if (categoriaFromURL !== filter) {
      setFilter(categoriaFromURL);
    }
  }, [searchParams, filter]);

  // Processamento dos produtos (filtro e ordenação no frontend como fallback)
  const processedProducts = useMemo(() => {
    let filtered = products;

    // Filtro por categoria (fallback se a API não filtrar)
    if (filter !== 'all') {
      filtered = products.filter(product => 
        product.category?.toLowerCase() === filter.toLowerCase()
      );
    }

    // Ordenação (fallback se a API não ordenar)
    const sorted = [...filtered].sort((a, b) => {
      // Primeiro, ordena por disponibilidade (produtos em estoque primeiro)
      const aInStock = (a.stock || 0) > 0;
      const bInStock = (b.stock || 0) > 0;
      
      if (aInStock && !bInStock) return -1;
      if (!aInStock && bInStock) return 1;
      
      // Se ambos estão em estoque ou fora de estoque, aplica a ordenação selecionada
      switch (sort) {
        case 'price-low': 
          return Number(a.price) - Number(b.price);
        case 'price-high': 
          return Number(b.price) - Number(a.price);
        case 'name': 
          return (a.name || '').localeCompare(b.name || '');
        case 'name-desc': 
          return (b.name || '').localeCompare(a.name || '');
        default: 
          return 0;
      }
    });

    return sorted;
  }, [products, filter, sort]);

  // Handlers
  const handleCategoryChange = useCallback((category) => {
    setFilter(category);

    if (category === 'all') {
      navigate('/products');
    } else {
      navigate(`/products?categoria=${category}`);
    }
  }, [navigate]); // CORREÇÃO: dependência também corrigida

  const handleSortChange = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Retry function
  const handleRetry = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Loading state
  if (loading) {
    return (
      <div className={classes.container}>
        <div className={classes.loading}>
          <div className={classes.spinner}></div>
          <p>Carregando produtos...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={classes.container}>
        <div className={classes.error}>
          <h3>Ops! Algo deu errado</h3>
          <p>{error}</p>
          <button onClick={handleRetry} className={classes.retryBtn}>
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {/* Header com informações */}
      <div className={classes.header}>
        <h1>Nossos Produtos</h1>
      </div>

      {/* Filtros de categoria */}
      <div className={classes.categorias}>
        <h3>Categorias</h3>
        <div className={classes.categoriaBtns}>
          {categories.map(category => (
            <button
              key={category.key}
              className={`${classes.categoriaBtn} ${filter === category.key ? classes.ativo : ''}`}
              onClick={() => handleCategoryChange(category.key)}
              aria-pressed={filter === category.key}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtros de ordenação */}
      <div className={classes.filtros}>
        <div className={classes.filtroGrupo}>
          <label htmlFor="sort-select" className={classes.filtroLabel}>
            Ordenar por:
          </label>
          <select
            id="sort-select"
            className={classes.filtroSelect}
            value={sort}
            onChange={handleSortChange}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de produtos */}
      <div className={classes.produtosSection}>
        {processedProducts.length > 0 ? (
          <>
            <div className={classes.produtosGrid}>
              {processedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  classes={classes}
                />
              ))}
            </div>
            
            {/* Paginação */}
            {totalPages > 1 && (
              <Paginacao
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className={classes.emptyState}>
            <h3>Nenhum produto encontrado</h3>
            <p>
              {filter === 'all' 
                ? 'Não há produtos disponíveis no momento.'
                : `Não há produtos na categoria "${categories.find(c => c.key === filter)?.label}".`
              }
            </p>
            {filter !== 'all' && (
              <button 
                onClick={() => handleCategoryChange('all')}
                className={classes.showAllBtn}
              >
                Ver todos os produtos
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Componente separado para o card do produto
const ProductCard = React.memo(({ product, onAddToCart, classes }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Normaliza os nomes das propriedades (seu JSON usa 'name', mas o código original usava 'nome')
  const productName = product.name || product.nome || 'Produto sem nome';
  const productImage = product.image || product.imagemURl || 'https://via.placeholder.com/200?text=Sem+Imagem';
  const productPrice = Number(product.price) || 0;
  const productStock = Number(product.stock) || 0;

  return (
    <article className={classes.productCard}>
      <div className={classes.imageContainer}>
        <img
          src={imageError ? 'https://via.placeholder.com/200?text=Imagem+Indisponível' : productImage}
          alt={productName}
          onError={handleImageError}
          loading="lazy"
        />
        {productStock === 0 && (
          <div className={classes.outOfStockOverlay}>
            <span>Esgotado</span>
          </div>
        )}
      </div>
      
      <div className={classes.productInfo}>
        <h3 className={classes.productName}>{productName}</h3>
        <p className={classes.productPrice}>
          R$ {productPrice.toFixed(2)}
        </p>
        
        {product.specifications && product.specifications.length > 0 && (
          <div className={classes.especificacoes}>
            {product.specifications.slice(0, 3).map((spec, i) => (
              <span key={i} className={classes.spec}>{spec}</span>
            ))}
          </div>
        )}
        
        <div className={classes.productActions}>
          {productStock > 0 ? (
            <AddToCartButton
              item={product}
              onAddToCart={onAddToCart}
              className={classes.addToCartBtn}
            />
          ) : (
            <button className={classes.outOfStockBtn} disabled>
              Produto Esgotado
            </button>
          )}
        </div>
      </div>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductsContainer;