import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/products.module.scss';

function ProductsContainer() {
    return (
        <div className={classes.container}>
            <div className={classes.categorias}>
                <button className={`${classes.categoriaBtn} ${classes.ativo}`}>Todos</button>
                <button className={classes.categoriaBtn}>Material Escolar</button>
                <button className={classes.categoriaBtn}>Escritório</button>
                <button className={classes.categoriaBtn}>Artesanato</button>
                <button className={classes.categoriaBtn}>Mochilas</button>
                <button className={classes.categoriaBtn}>Promoções</button>
            </div>

            <div className={classes.filtros}>
                <div className={classes.filtroGrupo}>
                    <span className={classes.filtroLabel}>Ordenar por:</span>
                    <select className={classes.filtroSelect}>
                        <option>Mais Relevantes</option>
                        <option>Menor Preço</option>
                        <option>Maior Preço</option>
                        <option>Mais Vendidos</option>
                        <option>Novidades</option>
                    </select>
                </div>
            </div>

        <div className={classes.produtos}>
        <h1>Teste Titulo</h1>
        </div>

        </div>


    );
}

export default ProductsContainer;