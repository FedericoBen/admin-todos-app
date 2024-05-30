"use client";
import Image from "next/image";
import { CiLogout, CiMenuBurger } from "react-icons/ci";

import styles from "./Sidebar.module.scss";
import OptionSidebar from "./OptionSidebar/OptionSidebar";
import { useState } from "react";
import {
  IoCalendarClearOutline,
  IoCheckboxOutline,
  IoListOutline,
  IoMenu,
  IoMenuOutline,
} from "react-icons/io5";

const menuItems = [
  {
    path: "/dashboard/rest-todos",
    title: "Rest api",
    icon: <IoCheckboxOutline size={32} />,
  },
  {
    path: "/dashboard/server-todos",
    title: "Server actions",
    icon: <IoListOutline size={32} />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${styles.container_menu} ${
        open && styles.container_menu_responsive
      }`}
    >
      <div
        className={styles.container_sidebar}
        style={{ display: open ? "flex" : "none" }}
      >
        <div className={styles.header}>
          <div className={styles.header_title_app}>
            <span className={styles.title}>Tailus</span>
          </div>
          <div className={styles.header_info_client}>
            <Image
              className={styles.header_image}
              height={100}
              width={100}
              src={
                "https://images.unsplash.com/photo-1633367583895-08545d733dfe?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="user avatar"
            />{" "}
            <span className={styles.client_name}>Nombre cliente</span>
          </div>
        </div>
        <label
          onClick={() => setOpen(false)}
          className={styles.container_options}
        >
          {menuItems.map((item) => (
            <OptionSidebar
              key={item.path}
              path={item.path}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </label>
        <div className={styles.footer_sidebar}>
          <CiLogout size={32} />
          <span>Logout</span>
        </div>
      </div>
      <div className={styles.menu_burger}>
        <div className={styles.container_icon} onClick={() => setOpen(!open)}>
          <IoMenuOutline size={32} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
