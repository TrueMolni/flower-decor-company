import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { getSliderConfigs } from './sliderConfig';

import css from './slider.module.css';

export const Slider = ({
  slides,
  section,
  customClass = '',
  customSlideClass = '',
}) => {
  return (
    <>
      <Swiper
        wrapperTag="ul"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={{
          nextEl: `.button-next-${section}`,
          prevEl: `.button-prev-${section}`,
        }}
        slidesPerView={1}
        updateOnWindowResize={true}
        loop={true}
        autoplay={true}
        speed={800}
        spaceBetween={24}
        lazyPreloadPrevNext={1}
        grabCursor={true}
        breakpoints={getSliderConfigs(section)}
        className={css.swiper + ' ' + customClass}
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            tag="li"
            className={css.slide + ' ' + customSlideClass}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
