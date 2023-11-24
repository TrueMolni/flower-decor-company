import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../shared/components/Title';
import PhotoCard from '../../shared/components/PhotoCard';

import css from './galery.module.css';

const Galery = ({ data }) => {
  const galleryCards = data.map(({ img, id }) => (
    <li className={css.item} key={id}>
      <PhotoCard
        customClass={css.imgWrapper}
        img={img}
        alt={'Оформлення та дизайн'}
        width={'350'}
        imageClass={css.image}
      />
    </li>
  ));

  return (
    <section>
      <div className={css.wrapper}>
        <Title customClass={css.title} size={'h2'} title={'Галерея'} />
        <ul className={css.list}>{galleryCards}</ul>
      </div>
    </section>
  );
};

Galery.propTypes = {
  data: PropTypes.array,
};

export default Galery;
