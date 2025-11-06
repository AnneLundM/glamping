import styles from "./pageHeader.module.css";
import logo from "/logo.png";

const PageHeader = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
      <h1>Gittes Glamping</h1>
    </header>
  );
};

export default PageHeader;
