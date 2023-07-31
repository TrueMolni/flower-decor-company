import Button from "../../shared/components/Button";
import Title from "../../shared/components/Title";

import css from "./hero.module.css";

const Hero = () => {
  return (
    <section>
      <div className={css.bg}>
        <div className={css.contentWrapper}>
          <Title
            customClass={css.mainTitle}
            title={"Flower Décor Company"}
            size={"h1"}
          />
          <h2 className={css.accentTitle}>
            Світ квітів, декору і краси з історією.
          </h2>
          <Button customClass={css.heroBtn} text={"Замовити"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
