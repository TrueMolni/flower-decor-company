import Button from "../../shared/components/Button";
import Title from "../../shared/components/Title";

import css from "./hero.module.css";
//
// Anjhay
// 
const Hero = () => {
  return (
    <section className={css.bg}>
      <div className={css.contentWrapper + " " + "container"}>
        <Title
          customClass={css.mainTitle}
          title={"Flower Décor Company"}
          size={"h1"}
        />
        {/* <h2 className={css.accentTitle}>
          Світ квітів, декору і краси з історією.
        </h2> */}
        <Button customClass={css.heroBtn} text={"Замовити"} />
      </div>
    </section>
  );
};

export default Hero;
