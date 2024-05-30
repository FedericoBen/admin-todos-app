"use client";
import { ReactNode } from "react";
import styles from "./OptionSidebar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type OptionSidebarProps = {
  title: string;
  subtitle?: string;
  path: string;
  icon?: ReactNode;
};

const OptionSidebar = ({ title, subtitle='', icon, path }: OptionSidebarProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.option} ${pathname == path && styles.active}`}
    >
      {icon}
      <div className={styles.info_option}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </Link>
  );
};

export default OptionSidebar;
