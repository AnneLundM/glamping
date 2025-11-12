import InfoSection from "../components/infoSection/InfoSection";
import PageHeader from "../components/pageHeader/PageHeader";
import Reviews from "../components/reviews/Reviews";
import logo from "/logo.png";
import bgImg from "../assets/image_00.jpg";
import gitte from "../assets/gitte.jpg";

const Home = () => {
  return (
    <article>
      {/* Headeren på forsiden - i modsætning til på undersiden - indeholder logo og knap.
      Vi sender derfor props/properties/egenskaber med <PageHeader/>-komponenten,
      der viser dem hvis de har en værdi.
      */}
      <PageHeader
        logo={logo}
        titleOne='Gittes'
        titleTwo='Glamping'
        bgImg={bgImg}
        button
      />
      <InfoSection
        title='Kom og prøv glamping hos Gitte'
        button
        img={gitte}
        description='Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor
        hjertevarme og omsorg møder naturens skønhed og eventyr. Vores
        dedikerede team, anført af Gitte selv, er her for at skabe den perfekte
        ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe
        minder og fordybelse, uanset om du besøger os som par, familie eller
        soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og
        arrangementer, der passer til alle aldre og interesser. Udforsk naturen,
        slap af ved bålet, del historier med nye venner, eller find indre ro med
        vores wellnessaktiviteter.'
      />
      <Reviews />
    </article>
  );
};

export default Home;
