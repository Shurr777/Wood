import React from 'react';
import s from './ConnectModalWindow.module.css'
import ConnectForm from "../Form/ConnectForm";
import ContactBlock from "./ContactBlock";


const ConnectModalWindow = () => {
    return (
        <div className={s.windowOverlay}>
            <div className={s.title}>
                <h2 className={s.titleHeader}>Зв’яжіться з нами!</h2>
                <p className={s.titleText}>Залиште заявку і наш менеджер зв’яжеться з Вами найближчим часом.</p>
            </div>
            <div className={s.infoBlock}>
                <ConnectForm/>
                <ContactBlock/>
            </div>
        </div>
    );
};

export default ConnectModalWindow;