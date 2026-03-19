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
    none: undefined,
  };
  return (
    <li className={clsx(styles.card, slotClass[gridSlot])}>
      <article className={styles.card__container}>
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
          sizes="(max-width: 1024px) 100vw, 100vw"
        />
        <Image
          src={images.src.d}
          fill
          alt={images.alt}
          className={clsx(styles.cardImg, styles.cardImg_d)}
          sizes={
            gridSlot === "featured"
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
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
          <div
            className={styles.card__icons}
            aria-label={`built using ${tech.join(", ")}`}
            role="group"
          >
            {techEls}
          </div>
        </div>
      </article>
    </li>
  );
};

export default ProjectCard;
