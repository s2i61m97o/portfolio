import Button from "@/components/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.heading}>Matt Simpson</h1>
        <h2 className={styles.subheading}>Frontend Developer</h2>
        <p className={styles.body}>
          Crafting interactive and responsive websites with Next.js, TypeScript
          and SASS.
        </p>
      </div>
      <div className={styles.btn__container}>
        <Button link="#projects" variant="primary">
          Projects
        </Button>
        <Button link="#contact" variant="secondary">
          Contact
        </Button>
      </div>
    </section>
  );
};

export default Hero;
