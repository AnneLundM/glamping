import Button from "../../../components/button/Button";
import styles from "../Backoffice.module.css";
import { useFetchActivities } from "../hooks/useFetchActivities";

const ActivityItem = ({ activity, onEdit }) => {
  // Vi henter slet-funktionen fra vores customhook.
  // Selve opdateringen sker i ActivityForm via onEdit.
  const { deleteActivity } = useFetchActivities();

  return (
    <li className={styles.row}>
      <div className={styles.rowInfo}>
        <span className={styles.rowTitle}>{activity.title}</span>
        <span
          className={
            styles.rowDate
          }>{`${activity.date} · ${activity.time}`}</span>
      </div>
      <div className={styles.actions}>
        <Button
          buttonText='Rediger'
          variant='small'
          onClick={() => onEdit(activity)}
        />
        <Button
          buttonText='Slet'
          variant='red'
          onClick={() => deleteActivity(activity._id)}
        />
      </div>
    </li>
  );
};

export default ActivityItem;
