import Button from "@/components/Button";
import styles from "./Hero.module.scss";
import Editor from "./Editor";
import {Github} from "@/assets/icons/icons";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid__container}>
        <div className={styles.content__container}>
          <h1 className={styles.content__heading}>Matt Simpson</h1>
          <h2 className={styles.content__subheading}>Frontend Developer</h2>
          <p className={styles.content__body}>
            Crafting interactive and responsive websites with
            <br /> Next.js, TypeScript and SASS.
          </p>
          <div className={styles.btn__container}>
            <Button link="#projects" variant="primary">
              Projects
            </Button>
            <Button link="#contact" variant="secondary">
              Contact
            </Button>
            <Button
              link="https://github.com/s2i61m97o/"
              variant="github"
              external
              aria-label="github profile"
              className={styles.link}
            >
              <Github className={styles.link__icon} />
            </Button>
          </div>
        </div>
        <Editor />
      </div>
    </section>
  );
};

export default Hero;
