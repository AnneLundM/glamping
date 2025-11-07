import { useState } from "react";
import Button from "../button/Button";
import styles from "./pageHeader.module.css";
import logo from "/logo.png";

const PageHeader = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      <h1>
        Gittes <span>Glamping</span>
      </h1>
      <Button buttonText='Book nu' onClick={toggle} variant='transparent' />
    </header>
  );
};

export default PageHeader;
