import React from 'react';
import PropTypes from 'prop-types';

import image from '../../shared/images/services/services1_1x.jpg';

import Title from '../../shared/components/Title';
import PhotoCard from '../../shared/components/PhotoCard/PhotoCard';
import Item from '../../shared/components/Item';
// import { css } from "@emotion/react";

import css from './services.module.css';

const Services = ({ items }) => {
  const posts = items.map(({ title, content, img }) => (
    <Item
      key={title}
      title={title}
      content={content}
      img={img}
      customItemClass={css.item}
    />
  ));

  return (
    <section className={'section'}>
      <div className={'container'}>
        <Title customClass={css.title} title={'Наші послуги'} size={'h2'} />
        <PhotoCard imageClass={css.img} img={image} />
        <ul className={css.serviceList}>{posts}</ul>
      </div>
    </section>
  );
};

Services.propTypes = {
  items: PropTypes.array,
};

export default Services;
