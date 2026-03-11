import Image, {StaticImageData} from "next/image";
import styles from "./Projects.module.scss";
import {Icons} from "@/assets/icons/icons";
import Button from "@/components/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  repo: string;
  img: {
    src: StaticImageData | string;
    alt: string;
  };
  tech: string[];
  featured: boolean;
}

const ProjectCard = ({
  title,
  description,
  url,
  repo,
  img,
  tech,
  featured,
}: ProjectCardProps) => {
  const techEls = tech.map((t) => {
    const Icon = Icons[t as keyof typeof Icons];
    if (!Icon) return null;
    return <Icon key={t} className={styles.card__icon} />;
  });
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Image src={img.src} fill alt={img.alt} sizes="100vw" />
      </div>
      <div className={styles.card__info}>
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__links}>
          <Button link={url} variant="primary">
            Live Site
          </Button>
          <Button link={repo} variant="secondary">
            Github
          </Button>
        </div>
        <div className={styles.card__icons}>{techEls}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
