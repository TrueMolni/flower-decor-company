import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import image from '../../shared/images/services/services2_1x.jpg';

import Title from '../../shared/components/Title';
import PhotoCard from '../../shared/components/PhotoCard/PhotoCard';
import Item from '../../shared/components/Item';
// import { css } from "@emotion/react";

import css from './services.module.css';

const Services = ({ items }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.e', {
      scrollTrigger: {
        trigger: '.e',
        start: 'top 50%',
        end: 'top 10%',
        // snap: 1,
        // scrub: 1,
        // markers: true,
        // toggleActions: 'restart pause reverse pause',
      },
      opacity: 1,
      duration: 2,
      ease: 'power4.out',
    });
  }, []);

  const posts = items.map(({ title, content, img }) => (
    <Item
      key={title}
      title={title}
      content={content}
      img={img}
      customItemClass={css.item}
      customTextClass={css.text}
      customTitleClass={css.customTitle}
    />
  ));

  return (
    <section className={css.section + ' section e'}>
      <div className={'container'}>
        <Title customClass={css.title} title={'Наші послуги'} size={'h2'} />
        <PhotoCard imageClass={css.img + ' ' + css.borderRadius} img={image} />
        <ul className={css.serviceList}>{posts}</ul>
      </div>
    </section>
  );
};

Services.propTypes = {
  items: PropTypes.array,
};

export default Services;
