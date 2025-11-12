import { useEffect, useState } from "react";
import Stay from "../stay/Stay";

const StaysSection = () => {
  /* State variabel der deklares med Reacts indbyggede hook: useState. Dens initialvalue/standardværdi/defaultvalue er et tomt array*/
  const [stays, setStays] = useState([]);

  const fetchStays = async () => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/stays"
      );

      const data = await response.json();

      console.log(data);

      setStays(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Indbygget hook fra React der sørger for, at funktionen kun køre én gang når komponenten renderes/mountes.
  // Medmindre der tilføjes en afhængighed.
  useEffect(() => {
    fetchStays();
  }, []);

  return (
    <section className='container'>
      {stays.map((stay) => (
        <Stay stay={stay} key={stay._id} />
      ))}
    </section>
  );
};

export default StaysSection;
