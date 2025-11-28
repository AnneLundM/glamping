import { useRouteError } from "react-router-dom";
import styles from "./errorElement.module.css";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <section className={styles.error}>
      <h2>Noget gik galt..</h2>
      <p>{error.message}</p>
    </section>
  );
};

export default ErrorElement;
