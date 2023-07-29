import React from "react";
import PropTypes from "prop-types";

import image from "../../shared/images/services/services1_1x.jpg";

import Title from "../../shared/components/Title";
import PhotoCard from "../../shared/components/PhotoCard/PhotoCard";
import Item from "../../shared/components/Item";

// import css from "./services.module.css";

const Services = ({ items }) => {
  const posts = items.map(({ title, content, img }) => (
    <Item title={title} content={content} img={img} />
  ));

  return (
    <div>
      <Title title={"Наші послуги"} size={"h2"} />
      <PhotoCard img={image} />
      <ul>{posts}</ul>
    </div>
  );
};

Services.propTypes = {
  items: PropTypes.array,
};

export default Services;
