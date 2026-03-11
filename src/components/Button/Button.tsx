import styles from "./Button.module.scss";
import clsx from "clsx";
import type {JSX} from "react";

const Button = ({
  children,
  link,
  variant,
  external,
  className,
}: {
  children: string | JSX.Element;
  link: string;
  variant: "primary" | "secondary" | "github";
  external?: boolean;
  className?: string;
}) => {
  return (
    <a
      href={link}
      className={clsx(styles.btn, styles[variant], className)}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
};

export default Button;
