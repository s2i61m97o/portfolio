import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({
  children,
  link,
  variant,
}: {
  children: string;
  link: string;
  variant: "primary" | "secondary";
}) => {
  return (
    <a href={link} className={clsx(styles.btn, styles[variant])}>
      {children}
    </a>
  );
};

export default Button;
