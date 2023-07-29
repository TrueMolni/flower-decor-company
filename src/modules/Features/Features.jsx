import Feature from "./Feature";

import Title from "../../shared/components/Title";

import css from "./features.module.css";

import { content } from "./content";
const Features = () => {
  const items = content.map(({ id, title, text }) => (
    <Feature key={id} text={text} title={title} />
  ));

  return (
    <section>
      <Title size={"h2"} title={"Переваги"} />
      <ul className={css.list}>{items}</ul>
    </section>
  );
};

export default Features;
