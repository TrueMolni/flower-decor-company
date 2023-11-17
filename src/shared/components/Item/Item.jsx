import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import PhotoCard from '../PhotoCard';

import css from './item.module.css';
// import defaultPicture from '../../images/services/services1_1x.jpg';

// const unicodeCharacter = "\u0003";
// U+23AF - код для горизонтальної лініїї

const Item = ({
  title,
  content,
  img,
  customItemClass,
  customTextClass,
  customTitleClass,
}) => {
  const elements = content.map(({ id, text }) => {
    return (
      <li key={id}>
        <p
          className={
            !customTextClass ? css.text : css.text + ' ' + customTextClass
          }
        >
          {/* {unicodeCharacter} */}
          {text}
        </p>
      </li>
    );
  });

  return (
    <li
      className={!customItemClass ? css.item : css.item + ' ' + customItemClass}
    >
      <div className={css.contentWrapeer}>
        <Title size={'h3'} title={title} customClass={customTitleClass} />
        <ul>{elements}</ul>
      </div>
      {img && (
        <PhotoCard
          customClass={css.imgWrapper}
          img={img}
          imageClass={css.img}
        />
      )}
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  img: PropTypes.string,
  customItemClass: PropTypes.string,
  customTextClass: PropTypes.string,
  customTitleClass: PropTypes.string,
};

Item.defaultProps = {
  content: [],
  // img: defaultPicture,
  img: '',
  customItemClass: '',
  customTextClass: '',
  customTitleClass: '',
};

export default Item;
