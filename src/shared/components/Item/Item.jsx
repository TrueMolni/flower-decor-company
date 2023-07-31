import React from "react";
import PropTypes from "prop-types";

import Title from "../Title";
import PhotoCard from "../PhotoCard";

import css from "./item.module.css";
import defaultPicture from "../../images/services/services1_1x.jpg";

const unicodeCharacter = "\u0003";
// U+23AF - код для горизонтальної лініїї

const Item = ({ title, content, img }) => {
  const elements = content.map(({ id, text }) => {
    return (
      <li key={id}>
        <p className={css.text}>
          {unicodeCharacter} {text}
        </p>
      </li>
    );
  });

  return (
    <li>
      <div>
        <Title size={"h3"} title={title} />
        <ul>{elements}</ul>
      </div>
      <PhotoCard img={img} />
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  img: PropTypes.string,
};

Item.defaultProps = {
  content: [],
  img: defaultPicture,
};

export default Item;
