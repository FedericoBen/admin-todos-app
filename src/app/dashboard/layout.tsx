import Navbar from "@/components/basics/Navbar/Navbar";
import Sidebar from "../../components/basics/Sidebar/Sidebar";
import styles from "./layout.module.scss";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container_dashboard_layout}>
      <Sidebar />
      <div className={styles.container_nav_pages}>
        <Navbar />
        <div className={styles.container_page}>{children}</div>
        <div></div>
      </div>
    </div>
  );
}
