import React from "react";
import PropTypes from "prop-types";

import Title from "../../shared/components/Title";
import PhotoCard from "../../shared/components/PhotoCard";

import css from "./galery.module.css";

const Galery = ({ data }) => {
  const galleryCards = data.map(({ img, id }) => (
    <PhotoCard
      key={id}
      customClass={css.item}
      img={img}
      alt={"Оформлення та дизайн"}
      width={"350"}
    />
  ));

  return (
    <section>
      <div className={css.wrapper}>
        <Title size={"h2"} title={"Галерея"} />
        <ul className={css.list}>{galleryCards}</ul>
      </div>
    </section>
  );
};

Galery.propTypes = {
  data: PropTypes.array,
};

export default Galery;
