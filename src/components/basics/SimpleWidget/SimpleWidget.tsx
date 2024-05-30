import styles from "./SimpleWidget.module.scss";
import { ReactNode } from "react";
import Link from "next/link";

interface SimpleWidgetProps {
  title: string;
  subtitle?: string;
  label?: string;
  icon?: ReactNode;
  href?: string | null;
}

const SimpleWidget = ({
  title,
  subtitle = "",
  label = "",
  icon = null,
  href = "",
}: SimpleWidgetProps) => {
  return (
    <div className={styles.container_simple_widget}>
      <div className={styles.container_info}>
        <span className={styles.title}>{label}</span>
        <div className={styles.container_info_text}>
          {icon}
          <div className={styles.container_text}>
            <span className={styles.text_title}>{title}</span>
            <span className={styles.text_subtitle}>{subtitle}</span>
          </div>
        </div>
      </div>
      {href && (
        <Link href={href} className={styles.footer_widget}>
          Mas ...
        </Link>
      )}
    </div>
  );
};

export default SimpleWidget;
