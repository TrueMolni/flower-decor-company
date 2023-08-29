import React from 'react';

import Galery from '../../modules/Gallery';

import { galleryData } from '../../shared/data/galleryData';

import css from './gallery-page.module.css';

const MainPage = () => {
  return (
    <div className={css.wrapper}>
      <Galery data={galleryData} />
    </div>
  );
};

export default MainPage;
