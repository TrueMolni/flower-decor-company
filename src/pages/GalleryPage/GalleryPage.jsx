import React from 'react';

import Galery from '../../modules/Gallery';
import DarkThemeBtn from 'shared/components/DarkThemeBtn';
import ScrollUpBtn from 'shared/components/ScrollUpBtn';
import Title from 'shared/components/Title';

import { galleryData } from '../../shared/data/galleryData';

import css from './gallery-page.module.css';

const GalleryPage = () => {
  return (
    <div className={css.wrapper}>
      <Title title="Сторінка галереї" size="h1" customClass="visuallyHidden" />
      <Galery data={galleryData} />
      <DarkThemeBtn />
      <ScrollUpBtn />
    </div>
  );
};

export default GalleryPage;
