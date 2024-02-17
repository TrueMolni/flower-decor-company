import css from './gallery-slider.module.css';
import Slider from 'modules/Slider';
import SliderNav from 'modules/SliderNav';

import PhotoCard from 'shared/components/PhotoCard';

import { galleryData } from 'shared/data/galleryData';

const GallerySlider = () => {
  const slides = galleryData.map(({ id, img }) => (
    <PhotoCard img={img} key={id} imageClass={css.img} customClass={css.img} />
  ));

  return (
    <section>
      <Slider slides={slides} customSlideClass={css.slide} section="gallery" />
      <SliderNav section="gallery" />
    </section>
  );
};

export default GallerySlider;
