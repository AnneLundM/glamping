import styles from "./review.module.css";

const Review = ({ title, name, description }) => {
  return (
    <article className={styles.review}>
      <h5>{name}</h5>
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Review;
