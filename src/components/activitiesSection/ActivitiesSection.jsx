import Activity from "../activity/Activity";
import { useLoaderData } from "react-router";

const ActivitiesSection = () => {
  const activities = useLoaderData()

  return (
    <section className='container'>
      {activities.map((activity) => (
        <Activity activity={activity} key={activity._id} />
      ))}
    </section>
  );
};

export default ActivitiesSection;
