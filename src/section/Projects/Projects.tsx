import styles from "./Projects.module.scss";
import {projects} from "@/data/projects";
import {ProjectCard} from "./";

const Projects = () => {
  const featuredCard = projects.map((p) => {
    if (p.featured) {
      return (
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          url={p.url}
          repo={p.github}
          img={p.images}
          tech={p.tech}
          featured={p.featured}
        />
      );
    }
  });

  const cardElements = projects.map((p) => {
    if (!p.featured) {
      return (
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          url={p.url}
          repo={p.github}
          img={p.images}
          tech={p.tech}
          featured={p.featured}
        />
      );
    }
  });

  return (
    <section id="projects" className={styles.container}>
      {featuredCard}
      {cardElements}
    </section>
  );
};

export default Projects;
