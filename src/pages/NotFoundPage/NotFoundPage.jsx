import { useNavigate } from 'react-router-dom';

import css from './not-found-page.module.css';
import Button from 'shared/components/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={css.box}>
      <div className={css.textbox}>
        <span className={css.text}>{'Ой! '}</span>
        <span className={css.text}>{'Ми не змогли знайти цієї сторінки'}</span>
      </div>
      <div className={css.boxButton}>
        <Button
          onClick={goToMainPage}
          customClass={css.button}
          text="На головну сторінку"
          ariaLabel="На головну сторінку"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
