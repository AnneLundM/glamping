import PageHeader from "../components/pageHeader/PageHeader";
import bgImg from "../assets/image_01.jpg";
import InfoSection from "../components/infoSection/InfoSection";
import StaysSection from "../components/staysSection/StaysSection";
// Stays.jsx er parent/forældre komponenten, fordi den er ansvarlig for PageHeader/child/barns visning
const Stays = () => {
  return (
    <article>
      <PageHeader titleOne='Vores ophold' bgImg={bgImg} />
      <InfoSection
        title='Vi har ophold til enhver smag'
        description='Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.
Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.'
      />

      <StaysSection />
    </article>
  );
};

export default Stays;
