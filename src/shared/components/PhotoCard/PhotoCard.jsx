import React from "react";
import PropTypes from "prop-types";

const PhotoCard = ({ img, alt, width, customClass }) => {
  return (
    <div className={customClass}>
      <img width={width} idth src={img} alt={alt} />
    </div>
  );
};

export default PhotoCard;

PhotoCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  customClass: PropTypes.string
};

PhotoCard.defaultProps = {
  alt: "company picture",
  width: "592",
  customClass: ""
};
