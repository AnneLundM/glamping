import Button from "../button/Button";
import ContactForm from "../contactForm/ContactForm";
import styles from "./infoSection.module.css";
import { useNavigate } from "react-router";

const InfoSection = ({ title, description, button, img, form }) => {
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

      {form && <ContactForm />}
    </section>
  );
};

export default InfoSection;
