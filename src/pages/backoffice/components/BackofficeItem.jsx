import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import styles from "../Backoffice.module.css";

const BackofficeItem = ({ title, date, editPath, onDelete }) => {
  const navigate = useNavigate();

  return (
    <li className={styles.row}>
      <div className={styles.rowInfo}>
        <span className={styles.rowTitle}>{title}</span>
        <span className={styles.rowDate}>{date}</span>
      </div>
      <div className={styles.actions}>
        <Button
          buttonText='Rediger'
          variant='small'
          onClick={() => navigate(editPath)}
        />
        <Button buttonText='Slet' variant='red' onClick={onDelete} />
      </div>
    </li>
  );
};

export default BackofficeItem;
