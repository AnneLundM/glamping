import { useRevalidator } from "react-router";
import Swal from "sweetalert2";

const useFetchActivities = () => {
  const apiUrl = "http://localhost:3042/activity";
  const revalidator = useRevalidator();

  // CREATE
  // `activity` er et FormData-objekt. Vi sætter IKKE Content-Type selv -
  // browseren sætter automatisk "multipart/form-data" med den rigtige boundary.
  const createActivity = async (activity) => {
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        body: activity,
      });

      if (!response.ok) {
        throw new Error("Fejl ved oprettelse af aktivitet");
      }

      const result = await response.json();

      // Hent listen igen, så den nye aktivitet vises med det samme
      revalidator.revalidate();
      return result;
    } catch (err) {
      console.error("Fejl ved oprettelse:", err);
      throw err;
    }
  };

  // UPDATE
  // OPDATER AKTIVITET
  // Vi sender et almindeligt objekt som JSON (ligesom createActivity).
  // VIGTIGT: id'et sendes i URL'en (ligesom DELETE), så serveren ved hvilken aktivitet der opdateres.
  const updateActivity = async (activity) => {
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "PUT",
        body: activity,
      });

      if (!response.ok) {
        throw new Error("Fejl ved opdatering af aktivitet");
      }

      const result = await response.json();

      // Hent listen igen, så ændringen vises med det samme
      revalidator.revalidate();
      Swal.fire({
        icon: "success",
        title: "Opdateret",
        text: "Aktiviteten er opdateret.",
        timer: 1500,
        showConfirmButton: false,
      });

      return result;
    } catch (err) {
      console.error("Fejl ved opdatering:", err);
      throw err;
    }
  };

  // DELETE
  const deleteActivity = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Er du sikker?",
      text: "Aktiviteten slettes permanent.",
      showCancelButton: true,
      confirmButtonText: "Ja, slet",
      cancelButtonText: "Annuller",
      confirmButtonColor: "#d33",
    });
    if (!result.isConfirmed) return;
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Fejl ved sletning af aktivitet");
      }

      revalidator.revalidate();
      Swal.fire({
        icon: "success",
        title: "Slettet",
        text: "Aktiviteten er slettet.",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Fejl ved sletning:", err);
    }
  };

  return {
    deleteActivity,
    createActivity,
    updateActivity,
  };
};;

export { useFetchActivities };
