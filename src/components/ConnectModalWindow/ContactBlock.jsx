import React from 'react';
import s from "./ContactBlock.module.css"
import phoneIcon from './icons/phoneIcon.png'
import mailIcon from './icons/mailIcon.png'
import time from './icons/Time.png'
import address from './icons/Location.png'

const ContactBlock = () => {
    return (
        <div className={s.contactBlockOverlay}>
            <div className={s.textbox}>
                <div className={s.leftside}>
                    <div className={s.phonesBlock}>
                        <div className={s.iconContainer}>
                            <img src={phoneIcon} alt="phone Icon"/>
                        </div>
                        <div className={s.phonesNumberBlock}>
                            <a href="tel:+380966353223">+38 (096) 635-32-23</a>
                            <a href="tel:+380731459739">+38 (073) 145-97-39</a>
                        </div>
                    </div>
                    <div className={s.emailblock}>
                        <div className={s.emailIconContainer}>
                            <img src={mailIcon} alt="Mail Icon"/>
                        </div>
                        <div className={s.emailText}>
                            <p>luckwood60@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className={s.rightside}>
                    <div className={s.addressBlock}>
                        <div className={s.addressBlockIcon}>
                            <img src={address} alt="address Icon"/>
                        </div>
                        <div className={s.addresstextBlock}>
                            <p>м. Львів</p>
                            <p>вул. Промислова 60</p>
                        </div>
                    </div>

                    <div className={s.worktimeBlock}>
                        <div className={s.worktimeBlockIcon}>
                            <img src={time} alt="time Icon"/>
                        </div>
                        <div className={s.timetextBlock}>
                            <p>Пн - Пт 9:00 - 18:00</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <iframe className={s.map}
                        title={"map"}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2571.8588622185207!2d24.0439831!3d49.8638958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adcfd65a33b95%3A0xc0de2bf062cb85ee!2z0LLRg9C70LjRhtGPINCf0YDQvtC80LjRgdC70L7QstCwLCA2MCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1668024631364!5m2!1suk!2sua"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default ContactBlock;