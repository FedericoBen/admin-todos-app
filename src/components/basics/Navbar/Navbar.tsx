import styles from "./Navbar.module.scss";

import {
  CiBellOn,
  CiChat1,
  CiSearch,
} from "react-icons/ci";

const Navbar = () => {
  return (
    <div className={styles.container_navbar}>
      <div className={styles.container_title}>
        <span className={styles.title}>Dashboard</span>
      </div>
      <div className={styles.container_actions}>
        <label htmlFor="" className={styles.container_search}>
          <CiSearch size={20} color=""/>
          <input type="" />
        </label>
        <button>
          <CiChat1 size={20}/>
        </button>
        <button>
          <CiBellOn size={20}/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
