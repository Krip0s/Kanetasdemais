import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/Sidebar.module.scss';

function AsideLoja() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSobreModal, setShowSobreModal] = useState(false);
    const [showContatoModal, setShowContatoModal] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = (modalType) => {
        if (modalType === "sobreModal") setShowSobreModal(!showSobreModal);
        else if (modalType === "contatoModal") setShowContatoModal(!showContatoModal);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const categoriasproductsServices = [
        { nome: "Impressão ", icone: "bx-printer"},
        { nome: "Plastificação", icone: "bx-book-open" },
        { nome: "Encardenações", icone: "bx-book" },
        { nome: "Carimbos", icone: "bx-color", },
        { nome: "Acessorios para informatica", icone: "bx-mouse",  }
    ];

    return (
        <>
            {/* Botão para abrir o painel lateral */}
            <button 
                className={`${classes.sidebarToggleServices} ${isOpen ? classes.active : ''}`}
                onClick={toggleSidebar}
                aria-label="Abrir menu de categorias"
            >
                <i className="bx bx-menu"></i>
                <span>Serviços Loja</span>
            </button>

            {/* Overlay para fechar o painel quando clicar fora */}
            {isOpen && (
                <div 
                    className={classes.sidebarOverlay} 
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Painel lateral direito */}
            <aside className={`${classes.sidebar} ${isOpen ? classes.sidebarOpen : ''}`}>
                <div className={classes.sidebarHeaderServices}>
                    <h3>Serviços loja física</h3>
                    <button 
                        className={classes.sidebarClose}
                        onClick={closeSidebar}
                        aria-label="Fechar menu"
                    >
                        &times;
                    </button>
                </div>

                <nav className={classes.sidebarNav}>
                    <ul className={classes.sidebarMenu}>
                        <li className={classes.sidebarItem}>
                            <Link 
                                to="/products" 
                                className={`${classes.sidebarLink} ${classes.allProducts}`}
                                onClick={closeSidebar}
                            >
                                <i className="bx bx-grid-alt"></i>
                                <span>Nossos Serviços</span>
                            </Link>
                        </li>
                        
                        {categoriasproductsServices.map((categoria, index) => (
                            <li className={classes.sidebarItem} key={index}>
                                <Link 
                                    to={categoria.link} 
                                    className={classes.sidebarLink}
                                    onClick={closeSidebar}
                                >
                                    <i className={`bx ${categoria.icone}`}></i>
                                    <span>{categoria.nome}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={classes.sidebarFooter}>
                    <div className={classes.sidebarActions}>
                        <button 
                            className={classes.sidebarBtn}
                            onClick={() => toggleModal("sobreModal")}
                        >
                            <i className="bx bx-info-circle"></i>
                            Sobre Nós
                        </button>
                        <button 
                            className={classes.sidebarBtn}
                            onClick={() => toggleModal("contatoModal")}
                        >
                            <i className="bx bx-phone"></i>
                            Contato
                        </button>
                    </div>
                </div>
            </aside>

            {/* Modais */}
            {showSobreModal && (
                <div className={classes.modal}>
                    <div className={classes.modalContent}>
                        <span className={classes.closeModal} onClick={() => toggleModal("sobreModal")}>&times;</span>
                        <h1>Sobre Nós</h1>
                        <p>A Kanetas D+ está no mercado há mais de 10 anos, oferecendo products de qualidade para estudantes,
                            profissionais e entusiastas de artesanato.</p>
                        <p>Nosso compromisso é proporcionar a melhor experiência de compra, com atendimento personalizado e preços
                            justos.</p>
                    </div>
                </div>
            )}

            {showContatoModal && (
                <div className={classes.modal}>
                    <div className={classes.modalContent}>
                        <span className={classes.closeModal} onClick={() => toggleModal("contatoModal")}>&times;</span>
                        <h1>Entre em Contato</h1>
                        <p>Email: Kanetas.D+@gmail.com.br</p>
                        <p>Telefone: (11) 5555-5555</p>
                        <p>Endereço: Rua das Flores, 123 - São Paulo, SP</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default AsideLoja;