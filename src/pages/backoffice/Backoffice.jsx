import { Outlet, useLoaderData } from "react-router-dom";
import ActivitiesSection from "./components/ActivitiesSection";
import styles from "./Backoffice.module.css";

const Backoffice = () => {
  // useLoaderData() henter det objekt, som backofficeLoader returnerede.
  const { activities } = useLoaderData();

  return (
    <article className={`backoffice ${styles.page}`}>
      <h1 className={styles.pageTitle}>Backoffice</h1>

      <div className={`backofficeContent ${styles.content}`}>
        <ActivitiesSection activities={activities} />

        {/*
        Outlet er en komponent fra react-router-dom, der bruges til at definere,
        hvor de "nested routes" (indlejrede ruter) skal blive renderet i applikationen
        */}
        <Outlet />
      </div>
    </article>
  );
};

export default Backoffice;
