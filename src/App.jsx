import "./App.css";
import PageHeader from "./components/pageHeader/PageHeader";
import Review from "./components/review/Review";

// Parent/forældre komponent
function App() {
  return (
    <>
      <PageHeader />
      <div className='container'>
        <Review
          title={"Romantisk Getaway"}
          name={"Lise, 43 år"}
          description={"hej og en lang beskrivelse"}
        />
        <Review
          title={"Weekendtur"}
          name={"Johanne"}
          description={
            "Jeg blev inviteret med af min veninde. Det var første gang jeg prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om at sove udenfor. Men jeg blev positivt overraket. Sengene var gode, og det var slet ikke ubehageligt at vågne op i teltet, som det ellers plejer at være i et normalt telt."
          }
        />
        <Review />
        <Review />
      </div>
    </>
  );
}

export default App;
