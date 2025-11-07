import { useState } from "react";
import Button from "../button/Button";
import styles from "./pageHeader.module.css";
import logo from "/logo.png";

const PageHeader = () => {
  /* State variabel der deklares med Reacts indbyggede hook: useState. Dens initialvalue/standardværdi/defaultvalue er false */
  const [open, setOpen] = useState(false);

  // Funktion der setter state til dens modsatte, nuværende værdi.
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      <h1>
        Gittes <span>Glamping</span>
      </h1>
      {/* Vi sender 3 props videre med komponenten: Én til teksten, én til funktionen og én til dens style  */}
      <Button buttonText='Book nu' onClick={toggle} variant='transparent' />
    </header>
  );
};

export default PageHeader;
