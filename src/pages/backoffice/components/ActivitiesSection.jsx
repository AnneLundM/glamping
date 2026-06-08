import { useState } from "react";
import styles from "../Backoffice.module.css";
import ActivityForm from "../forms/ActivityForm";
import ActivityItem from "./ActivityItem";

const ActivitiesSection = ({ activities }) => {
  // Den aktivitet der i øjeblikket redigeres (null = vi opretter en ny)
  const [editingActivity, setEditingActivity] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>Aktiviteter</h2>
        <span className={styles.count}>({activities.length})</span>
      </div>

      {activities.length === 0 ? (
        <p className={styles.empty}>Ingen aktiviteter endnu.</p>
      ) : (
        <ul className={styles.list}>
          {activities.map((activity) => (
            <ActivityItem
              key={activity._id}
              activity={activity}
              onEdit={setEditingActivity}
            />
          ))}
        </ul>
      )}

      <ActivityForm
        activity={editingActivity}
        onDone={() => setEditingActivity(null)}
      />
    </section>
  );
};

export default ActivitiesSection;
