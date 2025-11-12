import Button from "../button/Button";
import styles from "./infoSection.module.css";
import { useNavigate } from "react-router";

const InfoSection = ({ title, description, button, img }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.infoSection}>
      <h2>{title}</h2>
      <p>{description}</p>
      {img && <img src={img} alt='gitte' />}
      {button && (
        <Button
          buttonText='Se vores ophold'
          onClick={() => navigate("/stays")}
        />
      )}
    </section>
  );
};

export default InfoSection;
