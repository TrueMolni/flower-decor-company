import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './hero-modal.module.css';

import Modal from '../Modal';
import Title from '../Title';
import Button from '../Button';

import FDC from '../../images/qr-codes/FDC.svg';

const initialState = { name: '', email: '', phone: '' };

const HeroModal = ({ isOpen, close, handleSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const submitHandler = e => {
    e.preventDefault();
    handleSubmit(state);
    setState({ ...initialState });
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
        <form className={css.form}>
          <label className={css.label}>
            Ім'я:
            <input
              className={css.input}
              name="name"
              type="text"
              onChange={onChangeHandler}
            />
          </label>
          <label className={css.label}>
            Email:
            <input
              className={css.input}
              name="email"
              type="email"
              onChange={onChangeHandler}
            />
          </label>
          <label className={css.label}>
            Номер телефону:
            <input
              className={css.input}
              name="phone"
              type="tel"
              onChange={onChangeHandler}
            />
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
