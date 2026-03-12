import styles from "./page.module.scss";
import Hero from "@/section/Hero";
import About from "@/section/About";
import Projects from "@/section/Projects";
import Contact from "@/section/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
