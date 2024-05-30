import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonsProps {
  children: ReactNode;
  disable?: boolean;
  type?: any;
  onClick?: (v:any)=>void
}

const Button = ({
  children,
  disable = false,
  type = 'onSubmit',
  onClick = () =>{}
}: ButtonsProps) => {
  return (
    <button type={type} disabled={disable} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
