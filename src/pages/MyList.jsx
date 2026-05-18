import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import img from "../assets/image_05.jpg";
import InfoSection from "../components/infoSection/InfoSection";
import PageHeader from "../components/pageHeader/PageHeader";
import Activity from "../components/activity/Activity";
import { fetchActivityById } from "../loaders/DataLoaders";

const MyList = () => {
  // Hent de 'likede' aktiviteter (id'er) fra localStorage vha. hooken
  const [liked] = useLocalStorage("myList", []);

  // State der holder de fulde aktivitets-objekter hentet fra API'et
  const [activities, setActivities] = useState([]);

  // Når 'liked' ændrer sig, henter vi hver aktivitet ud fra dens id
  useEffect(() => {
    const loadActivities = async () => {
      // Promise.all kører alle fetch-kald parallelt og venter på dem alle
      const results = await Promise.all(liked.map(fetchActivityById));
      setActivities(results);
    };

    loadActivities();
  }, [liked]);

  return (
    <article>
      <PageHeader titleOne='Min liste' bgImg={img} />

      <InfoSection title='Aktiviteter på listen:' liked={liked.length} />

      {liked.length === 0 && <p className='empty'>Ingen aktiviteter endnu</p>}

      {activities.map((activity) => (
        <Activity key={activity._id} activity={activity} />
      ))}
    </article>
  );
};

export default MyList;
