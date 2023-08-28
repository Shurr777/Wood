import React, {useState} from 'react';
import s from "./ConnectForm.module.css";

const ConnectForm = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const onChangeName = (e) => {
        let name = e.target.value
        setName(name)
    }
    const onChangePhone = (e) => {
        let phone = e.target.value
        setPhone(phone)
    }
    const onChangeEmail = (e) => {
        let email = e.target.value
        setEmail(email)
    }
    const onChangeComment = (e) => {
        let comment = e.target.value
        setComment(comment)
    }
    const onClickSubmitButton = (event) => {
        event.preventDefault()

        setName('')
        setPhone('')
        setEmail('')
        setComment('')
    }

    return (
        <div>
            <form action="">
                <div className={s.inputOverlay}>
                    <label htmlFor="name">Ваше ім’я*</label>
                    <input className={s.userNameInput}
                           type="text"
                           name="userName"
                           value={name}
                           onChange={e => onChangeName(e)}
                           required
                    />
                </div>
                <div className={s.inputOverlay}>
                    <label htmlFor="phone">Ваш телефон*</label>
                    <input className={s.userPhoneInput}
                           type="text"
                           name='phone'
                           value={phone}
                           onChange={e => onChangePhone(e)}
                           required
                    />
                </div>
                <div className={s.inputOverlay}>
                    <label htmlFor="email">Ваш email*</label>
                    <input className={s.emailInput}
                           type="text"
                           name='email'
                           value={email}
                           onChange={e => onChangeEmail(e)}
                           required
                    />
                </div>
                <div className={s.inputOverlay}>
                    <label htmlFor="comment">Ваш коментар</label>
                    <textarea className={s.comment}
                              name="comment"
                              rows="6"
                              value={comment}
                              onChange={e => onChangeComment(e)}
                    />
                </div>
                <button className={s.submitButton}
                        onClick={onClickSubmitButton}
                >Зв’язатись</button>
            </form>
        </div>
    );
};

export default ConnectForm;