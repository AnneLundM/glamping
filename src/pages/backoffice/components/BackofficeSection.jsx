import styles from "../Backoffice.module.css";
import BackofficeItem from "./BackofficeItem";

const BackofficeSection = ({ title, items, endpoint, getDate, onDelete }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
        <span className={styles.count}>({items.length})</span>
      </div>

      {items.length === 0 ? (
        <p className={styles.empty}>Ingen {title.toLowerCase()} endnu.</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <BackofficeItem
              key={item.id}
              title={item.title}
              date={getDate(item)}
              editPath={`/backoffice/${endpoint}/edit/${item.id}`}
              onDelete={() => onDelete(endpoint, item.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default BackofficeSection;
