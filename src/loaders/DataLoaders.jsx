// Ved at gemme url'en i en variabel, bliver vedligehold af projektet nemmere, fordi vi ikke skal skrive den flere gange.
const apiUrl = "https://glamping-rqu9j.ondigitalocean.app";
const localApiUrl = "http://localhost:3042";

// Get activities
export const activitiesLoader = async () => {
  const res = await fetch(`${localApiUrl}/activities`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data;
};

// Get reviews
export const reviewsLoader = async () => {
  const res = await fetch(`${localApiUrl}/reviews`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data;
};

// Get stays
export const staysLoader = async () => {
  const res = await fetch(`${localApiUrl}/stays`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data;
};

// Get stay by Id (henter ophold ud fra id vha hooken 'useParams')
export const stayDetailsLoader = async ({ params }) => {
  const res = await fetch(`${apiUrl}/stay/${params.id}`);
  if (!res.ok) {
    throw new Response("Ophold ikke fundet", { status: 404 });
  }
  const data = await res.json();
  return data.data[0];
};

// Get activity by Id (genbruges fx i MyList til at hente fulde data ud fra et gemt id)
export const fetchActivityById = async (id) => {
  const res = await fetch(`${localApiUrl}/activity/${id}`);

  if (!res.ok) throw new Error("Aktivitet ikke fundet");
  const data = await res.json();
  return data;
};

// Get activities, reviews OG stays på én gang (bruges i Backoffice)
// Promise.all henter alle tre parallelt (hurtigere end at vente på dem én ad gangen)
// og vi returnerer dem samlet i ét objekt, så vi kan destrukturere dem i komponenten.
export const backofficeLoader = async () => {
  const [activitiesRes, reviewsRes, staysRes] = await Promise.all([
    fetch(`${localApiUrl}/activities`),
    fetch(`${localApiUrl}/reviews`),
    fetch(`${localApiUrl}/stays`),
  ]);

  if (!activitiesRes.ok || !reviewsRes.ok || !staysRes.ok) {
    throw new Response("Fejl ved hentning", { status: 500 });
  }

  const activities = await activitiesRes.json();
  const reviews = await reviewsRes.json();
  const stays = await staysRes.json();

  return { activities, reviews, stays };
};
