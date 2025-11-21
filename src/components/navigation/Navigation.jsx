import { NavLink } from "react-router";
import styles from "./navigation.module.css";
import { useState } from "react";
import Hamburger from "hamburger-react";
import logo from "/logo.png";

/* Når brugeren klikker på fx /stays bliver Stays komponenten/siden vist - uden at siden genindlæses. 
Dvs at det er den samme html side der vises, men indholdet skifter alt efter hvad der står i url'en*/

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  return (
    <nav className={styles.navigation}>
      <img className={styles.logo} src={logo} />
      <div className={styles.burger}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <li>
          <NavLink to='/' onClick={closeMenu}>
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink to='/stays' onClick={closeMenu}>
            Ophold
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' onClick={closeMenu}>
            Kontakt
          </NavLink>
        </li>
        <li>
          <NavLink to='/activities' onClick={closeMenu}>
            Aktiviteter
          </NavLink>
        </li>
        <li>
          <NavLink to='/mylist' onClick={closeMenu}>
            Min liste
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
