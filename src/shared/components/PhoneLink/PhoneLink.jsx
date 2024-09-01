import css from './phoneLink.module.css';

const PhoneLink = ({ className }) => {
  return (
    <a className={css.link + ' link ' + className} href="tel:+380661093240">
      +38 (066) 109-3240
    </a>
  );
};

export default PhoneLink;
