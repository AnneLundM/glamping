/* eslint-disable no-unused-vars */
import styles from "./activity.module.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Activity = ({ activity }) => {
  const [text, setText] = useState(false);

  const handleRead = () => {
    setText(!text);
  };

  const [liked, setLiked] = useLocalStorage("myList", []);

  const isLiked = liked.includes(activity._id);

  const handleLike = () => {
    setLiked((prevLike) =>
      isLiked
        ? prevLike.filter((li) => li !== activity._id)
        : [...prevLike, activity]
    );
  };

  return (
    <figure className={styles.activity}>
      <figcaption>
        <p className={styles.title}>{activity.title}</p>
      </figcaption>

      <img src={activity.image} alt={activity.title} />

      <div className={styles.infoSection}>
        <p className={styles.date}>
          {activity.date}

          {isLiked ? (
            <FcLike onClick={handleLike} />
          ) : (
            <FcLikePlaceholder onClick={handleLike} />
          )}
        </p>

        <p className={styles.titleTwo}>Kl. {activity.time}</p>

        <button onClick={handleRead}>{text ? "Luk" : "Læs mere"}</button>

        <AnimatePresence>
          {text && (
            <motion.div
              key='desc'
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}>
              <p className={styles.description}>{activity.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </figure>
  );
};

export default Activity;
