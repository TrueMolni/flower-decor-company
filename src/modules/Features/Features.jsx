import Feature from "./Feature";

import Title from "../../shared/components/Title";

import css from "./features.module.css";

import { content } from "./content";
const Features = () => {
  const items = content.map(({ id, title, text }) => (
    <Feature itemClass={css.element} key={id} text={text} title={title} />
  ));

  return (
    <section className={css.section}>
      <div className={"container"}>
        <Title customClass={"visuallyHidden"} size={"h2"} title={"Переваги"} />
        <ul className={css.list}>{items}</ul>
      </div>
    </section>
  );
};

export default Features;
