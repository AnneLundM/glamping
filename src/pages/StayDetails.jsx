import InfoSection from "../components/infoSection/InfoSection";
import PageHeader from "../components/pageHeader/PageHeader";
import { useLoaderData } from "react-router-dom";

// Stays.jsx er parent/forældre komponenten, fordi den er ansvarlig for PageHeader/child/barns visning
const StayDetails = () => {
  const stay = useLoaderData();

  return (
    <article className='darkBluePage'>
      <PageHeader titleOne={stay.title} bgImg={stay.image} />
      <InfoSection details={stay} description={stay.description} />
    </article>
  );
};

export default StayDetails;
