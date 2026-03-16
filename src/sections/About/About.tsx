import Image from "next/image";
import profile from "@/assets/animated-character-profile.png";
import styles from "./About.module.scss";
import IconStrip from "@/components/IconStrip/IconStrip";
const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.img__container}>
        <Image src={profile} fill alt="" className={styles.img} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.content__title}>about me</h2>
        <p className={styles.content__body}>
          I am a self-taught Frontend Developer, creating polished and
          responsive websites with clean code and performance in mind. Taking
          designs and bringing them to life, I enjoy the challenge of
          problem-solving complex layouts, turning intricate design problems
          into seamless user experiences.
        </p>
        <p className={styles.content__body}>
          Utilising the performance capabilities of Next.js, combined with
          TypeScript&apos;s type safety for more reliable and maintainable code,
          and SASS to keep stylesheets structured and scalable, I am currently
          open to frontend roles where design precision and performance are part
          of the culture.
        </p>
        <div>
          <IconStrip />
        </div>
      </div>
    </section>
  );
};

export default About;
