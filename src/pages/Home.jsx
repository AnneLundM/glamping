import InfoSection from "../components/infoSection/InfoSection";
import PageHeader from "../components/pageHeader/PageHeader";
import Reviews from "../components/reviews/Reviews";
import logo from "/logo.png";

const Home = () => {
  return (
    <article>
      <PageHeader logo={logo} titleOne='Gittes' titleTwo='Glamping' button />
      <InfoSection />
      <Reviews />
    </article>
  );
};

export default Home;
