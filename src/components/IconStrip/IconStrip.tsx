import {Next, React, Type, Sass} from "@/assets/icons/icons";
import styles from "./IconStrip.module.scss";

export default function IconStrip() {
  return (
    <div className={styles.container}>
      <Next className={styles.icon} />
      <Type className={styles.icon} />
      <React className={styles.icon} />
      <Sass className={styles.icon} />
    </div>
  );
}
