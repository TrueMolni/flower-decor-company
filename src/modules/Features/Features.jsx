import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Feature from './Feature';

import Title from '../../shared/components/Title';

import css from './features.module.css';

import { content } from './content';
const Features = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.c', {
      scrollTrigger: {
        trigger: '.c',
        start: 'top 50%',
        end: 'top 10%',
        // snap: 1,
        // scrub: 1,
        // markers: true,
        // toggleActions: 'restart pause reverse pause',
      },
      opacity: 1,
      x: 24,
      duration: 2,
      ease: 'power4.out',
    });
  }, []);

  const items = content.map(({ id, title, text }) => (
    <Feature itemClass={css.element} key={id} text={text} title={title} />
  ));

  return (
    <section className={'c ' + css.section}>
      <div className={'container'}>
        <Title customClass={'visuallyHidden'} size={'h2'} title={'Переваги'} />
        <ul className={css.list}>{items}</ul>
      </div>
    </section>
  );
};

export default Features;
