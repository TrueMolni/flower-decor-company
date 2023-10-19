import React from 'react';

import Galery from '../../modules/Gallery';
import DarkThemeBtn from 'shared/components/DarkThemeBtn';
import ScrollUpBtn from 'shared/components/ScrollUpBtn';

import { galleryData } from '../../shared/data/galleryData';

import css from './gallery-page.module.css';

const MainPage = () => {
  return (
    <div className={css.wrapper}>
      <Galery data={galleryData} />
      <DarkThemeBtn />
      <ScrollUpBtn />
    </div>
  );
};

export default MainPage;
