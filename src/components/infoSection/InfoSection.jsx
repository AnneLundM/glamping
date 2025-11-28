import Button from "../button/Button";
import ContactForm from "../contactForm/ContactForm";
import styles from "./infoSection.module.css";
import { useNavigate } from "react-router-dom";

const InfoSection = ({
  title,
  details,
  description,
  button,
  img,
  form,
  liked,
}) => {
  const navigate = useNavigate();

  return (
    <section className={styles.infoSection}>
      <div className={styles.content}>
        <h2>{title}</h2>
        {details && <h2>{details.teaser}</h2>}
        {liked && <p className={styles.liked}>{liked}</p>}
        <p>{description}</p>
        {details && (
          <>
            <ul>
              {details.includes.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>

            <h3>Fra {details.price},-</h3>

            <Button buttonText={"Book nu"} />
          </>
        )}
        {img && <img src={img} alt='gitte' />}
        {button && (
          <Button
            buttonText='Se vores ophold'
            onClick={() => navigate("/stays")}
          />
        )}

        {form && <ContactForm />}
      </div>
    </section>
  );
};

export default InfoSection;
