import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import classes from '../../Styles/style.module.scss';


function ModalPremio() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('modalPremioShown')) {
            setShowModal(true);
            localStorage.setItem('modalPremioShown', 'true');
        }
    }
    , []);

    const closeModal = () => {
        setShowModal(false);
    }
    
    if (!showModal) return null;

    return (
        <div className={classes.modal}>
            <div className={classes.modalContentPremio}>
                <span className={classes.closeModal} onClick={closeModal}>&times; </span>
                <h1>Sabia que nossa loja foi premiada?</h1>
                <a href="#">
                    <img className={classes.premioImg} 
                    src="https://i.ibb.co/HfYFMj8s/image.png" 
                    alt="Premio Kanetasdemais" />
                </a>
            </div>
        </div>
    )

}
export default ModalPremio
