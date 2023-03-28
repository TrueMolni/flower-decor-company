import Feature from "./Feature";
import { content } from "./content";
const Features = () => {
  const items = content.map(({ id, title, text }) => (
    <Feature key={id} text={text} title={title} />
  ));

  return (
    <section>
      <h2>Переваги</h2>
      <ul>{items}</ul>
    </section>
  );
};

export default Features;
