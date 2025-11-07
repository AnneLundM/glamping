import "./App.css";
import InfoSection from "./components/infoSection/InfoSection";
import PageHeader from "./components/pageHeader/PageHeader";
import Reviews from "./components/reviews/Reviews";

// Parent/forældre komponent - Den 'hoved'-komponent der styrer visninger af andre komponenter
function App() {
  return (
    <>
      {/* Child komponent */}
      <PageHeader />
      <InfoSection />
      <Reviews />
    </>
  );
}

export default App;
