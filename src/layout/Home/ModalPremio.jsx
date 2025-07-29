import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import classes from '../../Styles/style.module.scss';


function ModalPremio() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };

        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
    }
    , []);

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };
    
    if (!showModal) return null;

    return (
        <div className={classes.modal}>
            <div className={classes.modalContentPremio}>
                <span className={classes.closeModal} onClick={closeModal}>&times; </span>
                <h1>Sabia que nossa loja foi premiada?</h1>
                <a href="#">
                    <img className={classes.premioImg} 
                    src="https://i.postimg.cc/CLctmHkd/empresa-destaque.png" 
                    alt="Premio Kanetasdemais" />
                </a>
            </div>
        </div>
    )

}
export default ModalPremio
