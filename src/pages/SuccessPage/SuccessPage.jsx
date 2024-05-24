import { useNavigate } from 'react-router-dom';

import Button from 'shared/components/Button';

import css from './success-page.module.css';

const SuccessPage = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <div className={css.box}>
      <div className={css.textbox}>
        <span className={css.text}>Дякуємо!</span>
        <span className={css.text}>Вашу заявку буде опрацьовано </span>
      </div>
      <div className="boxButton">
        <Button
          onClick={goToMainPage}
          customClass={css.button}
          text="To main page"
        />
      </div>
    </div>
  );
};

export default SuccessPage;
