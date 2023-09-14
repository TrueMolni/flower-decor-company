import { useState } from 'react';
// import { useRef } from 'react';
// import Lottie, { LottieRefCurrentProps } from 'lottie-react';

import Button from '../../shared/components/Button';
import Title from '../../shared/components/Title';
import HeroModal from 'shared/components/HeroModal';

import { useToggle } from 'shared/hooks/useToggle';
// import animation from '../../shared/images/lottie/flower.json';

import css from './hero.module.css';
const Hero = () => {
  const [userData, setUserData] = useState([]);
  const { open, close, isOpen } = useToggle();
  // const animationRef = useRef < LottieRefCurrentProps > null;

  const onSubmit = user => {
    setUserData(prev => {
      return [...prev, user];
    });
    console.log(userData);
  };

  return (
    <section className={css.bg}>
      <div className={css.contentWrapper + ' container'}>
        <Title
          customClass={css.mainTitle}
          title={'Flower Décor Company'}
          size={'h1'}
        />
        {/* <h2 className={css.accentTitle}>
          Світ квітів, декору і краси з історією.
        </h2> */}
        <Button onClick={open} customClass={css.heroBtn} text={'Замовити'} />
        {/* <div style={{ width: '300px' }}>
          <Lottie
            onComplete={() => {}}
            lottieRef={animationRef}
            animationData={animation}
          />
        </div> */}
        <HeroModal handleSubmit={onSubmit} isOpen={isOpen} close={close} />
      </div>
    </section>
  );
};

export default Hero;
