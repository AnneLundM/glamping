import { NavLink } from "react-router";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to='/'>Forside</NavLink>
        </li>
        <li>
          <NavLink to='/stays'>Ophold</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
