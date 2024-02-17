const dimensions = {
  sm: 360,
  md: 768,
  lg: 1200,
};

export const getSliderConfigs = section => {
  switch (section) {
    case 'gallery': {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
        },
        [dimensions.md]: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        [dimensions.lg]: {
          slidesPerView: 3,
        },
      };
    }

    default: {
      return {
        [dimensions.sm]: {
          slidesPerView: 1,
        },
      };
    }
  }
};
