import "./App.css";
import PageHeader from "./components/pageHeader/PageHeader";
import Review from "./components/review/Review";

// Parent/forældre komponent - Den 'hoved'-komponent der styrer visninger af andre komponenter
function App() {
  return (
    <>
      {/* Child komponent */}
      <PageHeader />
      <div className='container'>
        {/* Child komponent der videresender props (title, name, description) Props er egenskaber: Objekter med værdier - i dette tilfælde strings */}
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
        <Review
          title={"Kanotur"}
          name={"Morten"}
          description={
            "Det var første gang jeg prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om at sove udenfor. Men jeg blev positivt overraket. Sengene var gode, og det var slet ikke ubehageligt at vågne op i teltet, som det ellers plejer at være i et normalt telt."
          }
        />
        <Review
          title={"Weekendtur"}
          name={"Cecilie"}
          description={
            "Jeg havde en rigtig hyggelig weekend, og maden er i særdeleshed en oplevelse værd. Min hustru synes kanoturen var rigtig idyllisk. Jeg er dog ikke så vild med at sejle."
          }
        />
      </div>
    </>
  );
}

export default App;
