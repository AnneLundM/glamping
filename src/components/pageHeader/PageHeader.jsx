import Button from "../button/Button";
import styles from "./pageHeader.module.css";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ logo, titleOne, titleTwo, button, bgImg }) => {
  const navigate = useNavigate();

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Hvis logo er true, skal <img/> vises/renderes. Hvis den er false (eller undefined eller null) skal den ikke. */}
      {logo && <img src={logo} alt='logo' />}

      <h1>
        {titleOne} <span>{titleTwo}</span>
      </h1>

      {/* Følgende er en betinget rendering (conditional rendering).
      Hvis button er true, skal <Button/>-komponenten renderes*/}

      {/* Vi sender 3 props videre med komponenten: Én til teksten, én til funktionen og én til dens style  */}

      {button && (
        <Button
          buttonText='Book nu'
          onClick={() => navigate("/stays")}
          variant='transparent'
        />
      )}
    </header>
  );
};

export default PageHeader;
