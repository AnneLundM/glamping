import { useRevalidator } from "react-router";
import Swal from "sweetalert2";

const useFetchActivities = () => {
  const apiUrl = "http://localhost:3042/activity";
  const revalidator = useRevalidator();

  // CREATE
  const createActivity = async (activity) => {
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activity),
      });

      if (!response.ok) {
        throw new Error("Fejl ved oprettelse af ophold");
      }

      const result = await response.json();
      return result;
    } catch (err) {
      console.error("Fejl ved oprettelse:", err);
      throw err;
    }
  };

  // UPDATE --> Hvordan skal den se ud?

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
  };
};

export { useFetchActivities };
