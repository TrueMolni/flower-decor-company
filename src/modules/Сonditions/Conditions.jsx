import { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Title from '../../shared/components/Title';
import PhotoCard from '../../shared/components/PhotoCard';

import { items } from './items';
import image1 from '../../shared/images/conditions/conditions_1x.png';

import css from './conditions.module.css';

const Conditions = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.n', {
      scrollTrigger: {
        trigger: '.n',
        start: 'top 50%',
        end: 'top 10%',
      },
      opacity: 1,
      x: 0,
      duration: 2,
      ease: 'power4.out',
    });
  }, []);

  const list = items.map(({ id, text }) => (
    <li key={id}>
      <p className={css.text}>{text}</p>
    </li>
  ));

  return (
    <section className={css.section + ' section n'}>
      <div className={css.wrapper + ' container'}>
        <div className={css.contentWrapper}>
          <Title
            customClass={css.customTitle}
            size={'h2'}
            title={'Умови співпраці'}
          />
          <ul className={css.list}>{list}</ul>
        </div>

        <PhotoCard
          img={image1}
          imageClass={''}
          customClass={''}
          width={'592'}
          alt={'wedding couple'}
        />
      </div>
    </section>
  );
};

export default Conditions;
