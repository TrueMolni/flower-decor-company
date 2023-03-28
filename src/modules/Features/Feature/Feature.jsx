import PropTypes from "prop-types";
import Button from "../../../shared/Button";

const Feature = ({ title, text }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{text}</p>
      <Button text={"Переглянути"} />
    </li>
  );
};

export default Feature;

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
