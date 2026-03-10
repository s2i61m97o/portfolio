import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "@/section/Hero";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />;
    </main>
  );
}
