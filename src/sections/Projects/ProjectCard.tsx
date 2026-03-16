import Image from "next/image";
import styles from "./Projects.module.scss";
import {Icons} from "@/assets/icons/icons";
import Button from "@/components/Button";
import clsx from "clsx";
import type {ProjectData} from "./types";

const ProjectCard = ({
  title,
  description,
  url,
  repo,
  images,
  tech,
  gridSlot,
}: ProjectData) => {
  const techEls = tech.map((t) => {
    const Icon = Icons[t as keyof typeof Icons];
    if (!Icon) return null;
    return <Icon key={t} className={styles.card__icon} />;
  });

  const slotClass = {
    featured: styles.cardFeatured,
    secondary: styles.cardSecondary,
    standard: styles.cardStandard,
  };
  return (
    <article className={clsx(styles.card, slotClass[gridSlot])}>
      <Image
        src={images.src.m}
        fill
        alt={images.alt}
        className={clsx(styles.cardImg, styles.cardImg_m)}
        sizes="100vw"
      />
      <Image
        src={images.src.t}
        fill
        alt={images.alt}
        className={clsx(styles.cardImg, styles.cardImg_t)}
      />
      <Image
        src={images.src.d}
        fill
        alt={images.alt}
        className={clsx(styles.cardImg, styles.cardImg_d)}
      />
      <div className={styles.card__info}>
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__links}>
          <Button link={url} variant="primary" external>
            <span className="visually-hidden">{title} - </span>
            <span>Live Site</span>
          </Button>
          <Button link={repo} variant="github" external>
            <span className="visually-hidden">{title} - </span>
            <span>Github</span>
          </Button>
        </div>
        <div className={styles.card__icons}>{techEls}</div>
      </div>
    </article>
  );
};

export default ProjectCard;
