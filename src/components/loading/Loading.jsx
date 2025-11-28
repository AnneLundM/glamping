import { PulseLoader } from "react-spinners";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <PulseLoader />
    </div>
  );
};

export default Loading;
