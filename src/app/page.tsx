import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "@/section/Hero";
import About from "@/section/About";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
    </main>
  );
}
