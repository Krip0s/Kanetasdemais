import React, { useEffect } from "react";
import PageHeaderHome from "../layout/Home/PageHeaderHome";
import FooterHome from "../layout/Home/FooterHome";
import BannerContent from "../layout/products/BannerContent";
import ProductsConteiner from "../layout/products/ProductsConteiner";
import Paginação from "../layout/products/Paginação";
import classes from '../Styles/products.module.scss';

function products() {

function Products(){
  const [products, SetProducts] = useState([]);
  const [filteredProducts, SetFilteredProducts] = useState([]);
  const [currentPage, SetCurrentPage] = useState(1);
  const [itemsPerPage] = useState (8)
  const [filters, setFilters] = useState({
    category: 'Todos',
    sortBy: 'Mais Relevantes'
  });

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Caderno', category: 'Material Escolar', price: 15.90 },
    ];
    SetProducts(mockProducts);
    SetFilteredProducts(mockProducts);
  }, []);
  useEffect(() => {
    let result = [...products]

    if (filters.category !== 'Todos') {
      result = result.filter(products => products.category === filters.category);
    }
    switch(filters.sortBy) {
      case 'Menor Preço':
        result.sort((a,b) => a.price - b.price);
        break;
        case 'Maior Preço':
        result.sort((a,b) => b.price - a.price);
        break;

    }
  })
}

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