import React from "react";
import PropTypes from "prop-types";

const PhotoCard = ({ img, alt, width }) => {
  return (
    <div>
      <img width={width} idth src={img} alt={alt} />
    </div>
  );
};

export default PhotoCard;

PhotoCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
};

PhotoCard.defaultProps = {
  alt: "company picture",
  width: "592",
};
