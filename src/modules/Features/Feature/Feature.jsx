import PropTypes from 'prop-types';

import Button from '../../../shared/components/Button';
import Title from '../../../shared/components/Title';

import css from './feature.module.css';

const Feature = ({ title, text, itemClass }) => {
  return (
    <li className={!itemClass ? css.item : css.item + ' ' + itemClass}>
      <Title size={'h3'} title={title} customClass={css.featureTitle} />
      <div className={css.wrapper}>
        <p className={css.text}>{text}</p>
        <Button customClass={css.btn} text={'Переглянути'} />
      </div>
    </li>
  );
};

export default Feature;

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  itemClass: PropTypes.string,
};
