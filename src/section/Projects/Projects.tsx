import styles from "./Projects.module.scss";
import {projects} from "@/data/projects";
import {ProjectCard} from "./";

const Projects = () => {
  const cardElements = projects.map((p) => {
    return (
      <ProjectCard
        key={p.title}
        title={p.title}
        description={p.description}
        url={p.url}
        repo={p.repo}
        images={p.images}
        tech={p.tech}
        gridSlot={p.gridSlot}
      />
    );
  });

  return (
    <section id="projects" className={styles.container}>
      {cardElements}
    </section>
  );
};

export default Projects;
