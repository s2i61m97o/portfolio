import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({
  children,
  link,
  variant,
  external,
}: {
  children: string;
  link: string;
  variant: "primary" | "secondary" | "github";
  external?: boolean;
}) => {
  return (
    <a
      href={link}
      className={clsx(styles.btn, styles[variant])}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
};

export default Button;
