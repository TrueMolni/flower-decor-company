import React from "react";
import PropTypes from "prop-types";

import Title from "../../shared/components/Title";
import PhotoCard from "../../shared/components/PhotoCard";

// import css from "./galery.module.css";

const Galery = (props) => {
  return (
    <div>
      <Title size={"h2"} title={"Галерея"} />
      <PhotoCard width={350} height={350} />
    </div>
  );
};

Galery.propTypes = {};

export default Galery;
