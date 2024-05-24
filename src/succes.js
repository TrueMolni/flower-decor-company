import { useNavigate } from 'react-router-dom';

import Button from 'shared/components/Button';


const SuccessPage = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <div >
      <div >
        <span >Дякуємо!</span>
        <span >Вашу заявку буде опрацьовано </span>
      </div>
      <div >
        <Button
          onClick={goToMainPage}
 
          text="To main page"
        />
      </div>
    </div>
  );
};

export default SuccessPage;
