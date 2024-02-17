import React from 'react';

import Hero from '../../modules/Hero';
import Features from '../../modules/Features';
import Conditions from '../../modules/Сonditions';
import Services from '../../modules/Services';
// import Galery from '../../modules/Gallery';
import ContactCall from '../../modules/ContactCall';
import ScrollUpBtn from 'shared/components/ScrollUpBtn';
import DarkThemeBtn from 'shared/components/DarkThemeBtn';
import GallerySlider from 'modules/GallerySlider';

import { servicesData } from '../../shared/data/servicesData';
// import { galleryData } from '../../shared/data/galleryData';

// import css from './main-page.module.css';

const MainPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Conditions />
      <Services items={servicesData} />
      {/* <Galery data={galleryData} /> */}
      <GallerySlider />
      <ContactCall />
      <DarkThemeBtn />
      <ScrollUpBtn />
    </>
  );
};

export default MainPage;
