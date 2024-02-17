import css from './slider-card.module.css';

const SliderCard = ({ src, alt, className = '' }) => {
  return (
    <div className={css.wrapper + ` ${className && className}`}>
      <img className={css.img} alt={alt} src={src} />
    </div>
  );
};
export default SliderCard;
