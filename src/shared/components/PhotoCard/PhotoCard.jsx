import React from "react";
import PropTypes from "prop-types";

const PhotoCard = ({ img, alt, width, customClass, imageClass }) => {
  return (
    <div className={customClass}>
      <img className={imageClass} width={width} src={img} alt={alt} />
    </div>
  );
};

export default PhotoCard;

PhotoCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  customClass: PropTypes.string,
  imageClass: PropTypes.string,
};

PhotoCard.defaultProps = {
  img: "",
  alt: "company picture",
  width: "592",
  customClass: "",
  imageClass: "",
};