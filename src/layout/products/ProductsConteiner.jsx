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

        <h2 className={classes.categoriaTitulo}>Material Escolar</h2>
        <div className={classes.productsGrid}>
            <div className={classes.produto}>
                <div className={classes.promocaoBadge}>-15%</div>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Caderno Universitário"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Caderno Universitário 10 Matérias</div>
                    <div className={classes.produtoDescricao}>Capa dura, 200 folhas, espiral.</div>
                    <div className={classes.produtoPreco}>R$ 24,90</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Conjunto de Canetas Coloridas"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Conjunto de Canetas Coloridas</div>
                    <div className={classes.produtoDescricao}>Kit com 12 cores, ponta fina.</div>
                    <div className={classes.produtoPreco}>R$ 15,50</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Estojo Escolar"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Estojo Escolar</div>
                    <div className={classes.produtoDescricao}>2 divisórias, tecido resistente.</div>
                    <div className={classes.produtoPreco}>R$ 18,90</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.promocaoBadge}>Novo</div>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Lápis de Cor Profissional"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Lápis de Cor Profissional</div>
                    <div className={classes.produtoDescricao}>Estojo com 24 cores, alta pigmentação.</div>
                    <div className={classes.produtoPreco}>R$ 42,00</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>
        </div>

        <h2 className={classes.categoriaTitulo}>Escritório</h2>
        <div className={classes.productsGrid}>
            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Agenda 2025"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Agenda 2025</div>
                    <div className={classes.produtoDescricao}>Capa dura, marcador de página.</div>
                    <div className={classes.produtoPreco}>R$ 32,00</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Grampeador de Mesa"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Grampeador de Mesa</div>
                    <div className={classes.produtoDescricao}>Capacidade para 20 folhas, metal.</div>
                    <div className={classes.produtoPreco}>R$ 28,50</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.promocaoBadge}>-20%</div>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Organizador de Mesa"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Organizador de Mesa</div>
                    <div className={classes.produtoDescricao}>3 compartimentos, acrílico transparente.</div>
                    <div className={classes.produtoPreco}>R$ 45,90</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Calculadora de Mesa"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Calculadora de Mesa</div>
                    <div className={classes.produtoDescricao}>12 dígitos, solar e bateria.</div>
                    <div className={classes.produtoPreco}>R$ 22,75</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>
        </div>

        <h2 className={classes.categoriaTitulo}>Artesanato</h2>
        <div className={classes.productsGrid}>
            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Kit Pincéis Artísticos"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Kit Pincéis Artísticos</div>
                    <div className={classes.produtoDescricao}>10 tamanhos diferentes, cerdas sintéticas.</div>
                    <div className={classes.produtoPreco}>R$ 36,90</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.promocaoBadge}>Novo</div>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Conjunto de Tintas Acrílicas"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Conjunto de Tintas Acrílicas</div>
                    <div className={classes.produtoDescricao}>12 cores, 20ml cada, alta cobertura.</div>
                    <div className={classes.produtoPreco}>R$ 54,50</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Papel para Scrapbook"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Papel para Scrapbook</div>
                    <div className={classes.produtoDescricao}>Bloco com 20 folhas estampadas.</div>
                    <div className={classes.produtoPreco}>R$ 19,90</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Tesoura para Tecido"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Tesoura para Tecido</div>
                    <div className={classes.produtoDescricao}>8 polegadas, aço inoxidável.</div>
                    <div className={classes.produtoPreco}>R$ 27,80</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>
        </div>

        <h2 className={classes.categoriaTitulo}>Mochilas</h2>
        <div className={classes.productsGrid}>
            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Mochila Escolar"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Mochila Escolar</div>
                    <div className={classes.produtoDescricao}>3 compartimentos, tecido impermeável.</div>
                    <div className={classes.produtoPreco}>R$ 89,90</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.promocaoBadge}>-10%</div>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Mochila para Notebook"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Mochila para Notebook</div>
                    <div className={classes.produtoDescricao}>Até 15 polegadas, proteção acolchoada.</div>
                    <div className={classes.produtoPreco}>R$ 125,00</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Estojo Escolar Duplo"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Estojo Escolar Duplo</div>
                    <div className={classes.produtoDescricao}>2 compartimentos com zíper.</div>
                    <div className={classes.produtoPreco}>R$ 22,50</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>

            <div className={classes.produto}>
                <div className={classes.produtoImg}><img src="https://picsum.photos/270/200" alt="Bolsa Tote Paper"/></div>
                <div className={classes.produtoInfo}>
                    <div className={classes.produtoNome}>Bolsa Tote Paper</div>
                    <div className={classes.produtoDescricao}>Ideal para livros e cadernos, alças reforçadas.</div>
                    <div className={classes.produtoPreco}>R$ 65,90</div>
                    <button className={classes.btn}>Comprar</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductsContainer;