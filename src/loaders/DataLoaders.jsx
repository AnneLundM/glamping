const apiUrl = "https://glamping-rqu9j.ondigitalocean.app";

// Get activities
export const activitiesLoader = async () => {
  const res = await fetch(`${apiUrl}/activities`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data.data;
};

// Get reviews
export const reviewsLoader = async () => {
  const res = await fetch(`${apiUrl}/reviews`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data.data;
};

// Get stays
export const staysLoader = async () => {
  const res = await fetch(`${apiUrl}/stays`);
  if (!res.ok) throw new Response("Fejl ved hentning", { status: res.status });
  const data = await res.json();
  return data.data;
};

// Get stay by Id
export const stayDetailsLoader = async ({ params }) => {
  const res = await fetch(`${apiUrl}/stay/${params.id}`);

  if (!res.ok) {
    throw new Response("Ophold ikke fundet", { status: 404 });
  }

  const data = await res.json();
  return data.data[0];
};
