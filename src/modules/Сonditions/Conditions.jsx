import React from 'react';
// import PropTypes from "prop-types";

import Title from '../../shared/components/Title';
import Button from '../../shared/components/Button';
import PhotoCard from '../../shared/components/PhotoCard';

import { items } from './items';
import image1 from '../../shared/images/conditions/conditions_1x.png';
// import image2 from "../../shared/images/conditions/conditions_2x.png";

import css from './conditions.module.css';

const Conditions = () => {
  const list = items.map(({ id, text }) => (
    <li key={id}>
      <p className={css.text}>{text}</p>
    </li>
  ));

  return (
    <section className="section">
      <div className={css.wrapper + ' container'}>
        <div className={css.contentWrapper}>
          <Title
            customClass={css.customTitle}
            size={'h2'}
            title={'Умови співпраці'}
          />
          <ul className={css.list}>{list}</ul>
          <Button text={"Зв'язатися з нами"} customClass={css.btn} />
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

// Conditions.propTypes = {};
