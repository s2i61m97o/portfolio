import styles from "./Editor.module.scss";
import clsx from "clsx";
import {highlight} from "sugar-high";

export default function codeEditor() {
  const code = `import { Developer } from "./Matt";
import { Precision } from "./design";
import { Performance } from "./code";

export default function Matt() {
  return (
    <Matt
      role="Frontend Developer"
      stack={["Next.js", "TypeScript", "SASS"]}
      status="Open to opportunities"
    />
  );
}`;

  const highlightedCode = highlight(code);

  return (
    <div className={styles.window}>
      <div className={styles.topBar}>
        <p>matt.tsx</p>
      </div>
      <div className={styles.fileTabs}>
        <div className={clsx(styles.tab, styles.openTab)}>matt.tsx</div>
      </div>
      <div className={styles.editor}>
        <pre className={styles.pre}>
          <code dangerouslySetInnerHTML={{__html: highlightedCode}} />
        </pre>
      </div>
    </div>
  );
}
