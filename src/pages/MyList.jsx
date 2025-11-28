import { useLocalStorage } from "@uidotdev/usehooks";
import img from "../assets/image_05.jpg";
import InfoSection from "../components/infoSection/InfoSection";
import PageHeader from "../components/pageHeader/PageHeader";
import Activity from "../components/activity/Activity";

const MyList = () => {
  // Hent de 'likede' aktiviteter fra localStorage vha. hooken
  const [liked] = useLocalStorage("myList", []);

  return (
    <article>
      <PageHeader titleOne='Min liste' bgImg={img} />

      <InfoSection title='Aktiviteter på listen:' liked={liked.length} />

      {liked.length === 0 && <p className='empty'>Ingen aktiviteter endnu</p>}

      {liked.length > 0 &&
        liked.map((ac) => <Activity key={ac._id} activity={ac} />)}
    </article>
  );
};

export default MyList;
