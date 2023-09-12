import { useNavigate } from 'react-router-dom';

import css from './not-found-page.module.css';
import Button from 'shared/components/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <div className={css.box}>
      <div className={css.textbox}>
        <span className={css.text}>Ooops!</span>
        <span className={css.text}>This page not found </span>
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

export default NotFoundPage;
