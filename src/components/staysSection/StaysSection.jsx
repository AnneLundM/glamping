import Stay from "../stay/Stay";
import { useLoaderData } from "react-router";

const StaysSection = () => {
  const stays = useLoaderData()

  return (
    <section className='container'>
      {stays.map((stay) => (
        <Stay stay={stay} key={stay._id} />
      ))}
    </section>
  );
};

export default StaysSection;
