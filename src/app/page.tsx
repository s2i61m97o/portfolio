import styles from "./page.module.scss";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

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
