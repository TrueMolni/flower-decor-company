import { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Title from '../../shared/components/Title';

import css from './hero.module.css';

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.a', {
      scrollTrigger: {
        trigger: '.a',
        start: 'top 90%',
        end: 'top 10%',
      },
      opacity: 1,
      duration: 3,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section className={css.bg}>
      <div className={css.contentWrapper + ' container a'}>
        <Title
          customClass={css.mainTitle}
          title={'Flower Décor Company'}
          size={'h1'}
        />
      </div>
    </section>
  );
};

export default Hero;
