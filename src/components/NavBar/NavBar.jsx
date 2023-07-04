import React from 'react';
import s from './NavBar.module.css'
import logo from './01 4.png'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.navbarOverlay}>
            <div className={s.logolang}>
                <div className="logo">
                    <NavLink to={'main'}>
                        <img src={logo} alt="Logo" className={s.logo}/>
                    </NavLink>
                </div>
                <div className={s.lang}>
                    UA|EN
                </div>
            </div>
            <menu className={s.navBar}>
                <NavLink to='about' className={({isActive}) => `${isActive ? s.active : ''}`}>
                    Про нас
                </NavLink>
                <NavLink to='projects' className={({isActive}) => `${isActive ? s.active : ''}`}>
                    Проєкти
                </NavLink>
                <NavLink to='catalog' className={({isActive}) => `${isActive ? s.active : ''}`}>
                    Каталог
                </NavLink>
                <NavLink to='blog' className={({isActive}) => `${isActive ? s.active : ''}`}>
                    Блог
                </NavLink>
                <NavLink to='faq' className={({isActive}) => `${isActive ? s.active : ''}`}>
                    Питання
                </NavLink>
                <div className={s.buttonContainer}>
                    <button className={s.navButton}>Зв'язатись</button>
                </div>
            </menu>
        </div>
    );
};

export default NavBar;