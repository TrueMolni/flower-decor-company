import { FaAngleUp } from 'react-icons/fa';

import css from './slider-nav.module.css';

const SliderNavData = [
  {
    id: 'prev',
    ariaLabel: 'Перейти до попереднього слайду',
  },
  {
    id: 'next',
    ariaLabel: 'Перейти до наступного слайду',
  },
];

const SliderNav = ({ className = '', section }) => {
  const cakesStyles = ' gallery-slider-nav ';

  return (
    <ul
      className={
        css.list +
        ` ${section === 'gallery' && cakesStyles + css.cakesStyles} ` +
        `${className ? className : ''}`
      }
    >
      {SliderNavData?.map(({ id, ariaLabel }) => (
        <li className={`${section === 'gallery' && css.item}`} key={id}>
          <button
            className={`button-${id}-${section} slider-button`}
            type="button"
            aria-label={ariaLabel}
          >
            <FaAngleUp
              key={0}
              className={
                css.icon +
                ` ${id === 'next' ? css.rotateRight : css.rotateLeft} `
              }
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SliderNav;
