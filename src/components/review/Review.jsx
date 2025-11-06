// Vi bruger module.css for at undgå globale konflikter
import styles from "./review.module.css";

// Review er en child-komponent, som får data (props) fra forældre-komponenten

const Review = ({ title, name, description }) => {
  return (
    <article className={styles.review}>
      <h4>{name}</h4>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};

export default Review;
