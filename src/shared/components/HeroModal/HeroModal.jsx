import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import css from './hero-modal.module.css';

import Modal from '../Modal';
import Title from '../Title';
import Button from '../Button';

import FDC from '../../images/qr-codes/FDC.svg';

const initialState = { name: '', email: '', phone: '' };

const HeroModal = ({ isOpen, close, handleSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const [errors, setErrors] = useState({});

  const form = useRef();

  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateName = name => {
    const regex = /^[a-zA-Zа-яА-ЯїЇєЄіІґҐ'-]{1,40}$/;
    return regex.test(name);
  };

  const validatePhone = phone => {
    const regex = /^\+?3?8?(0\d{9})$/;
    return regex.test(phone);
  };

  const submitHandler = e => {
    e.preventDefault();
    const emailIsValid = validateEmail(state.email);
    const nameIsValid = validateName(state.name);
    const phoneIsValid = validatePhone(state.phone);

    if (!emailIsValid || !nameIsValid || !phoneIsValid) {
      setErrors({
        email: !emailIsValid ? 'Невірна електронна адреса' : '',
        name: !nameIsValid ? "Невірне ім'я" : '',
        phone: !phoneIsValid ? 'Невірний номер телефону' : '',
      });
      return;
    }

    handleSubmit(state);
    e.target.submit();

    setErrors({});
    setState({ ...initialState });
    form.current.reset();
  };

  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <div className={css.modalWrapper}>
        <Title title="Прекрасно!" size="h2" />
        <p className={css.subtext}>
          Залиште свої контакти для зворотнього зв'язку
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify-honeypot="bot-field"
          ref={form}
          data-netlify="true"
          className={css.form}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <label className={css.label}>
            Ім'я:
            <input
              className={css.input}
              name="name"
              type="text"
              onChange={onChangeHandler}
            />
            {errors.name && <p>{errors.name}</p>}
          </label>
          <label className={css.label}>
            Email:
            <input
              required={true}
              className={css.input}
              name="email"
              type="email"
              onChange={onChangeHandler}
            />
            {errors.email && <p>{errors.email}</p>}
          </label>
          <label className={css.label}>
            Номер телефону:
            <input
              className={css.input}
              name="phone"
              type="tel"
              onChange={onChangeHandler}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </label>
          <div>
            <Button
              onClick={submitHandler}
              type="submit"
              customClass={css.btn}
              text="Надіслати"
            />
          </div>
        </form>
        <div className={css.qrWrapper}>
          <p className={css.label}>Aбо</p>
          <p className={css.label}>
            Відскануйте QR code і перейдіть на наш Instagram{' '}
          </p>
          <img
            className={css.qrImage}
            src={FDC}
            alt="qr-code посилання на сторінку в інстаграм"
          />
        </div>
      </div>
    </Modal>
  );
};

HeroModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
};

export default HeroModal;
