// npm i react-hook-form
import { useForm } from "react-hook-form";
// npm i yup
// npm i @hookform/resolvers/yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import Button from "../../../components/button/Button";
import { useFetchActivities } from "../hooks/useFetchActivities";

// activity: hvis den er sat, er vi i "rediger"-tilstand
// onDone: kaldes når en redigering er færdig (eller annulleres), så forælderen kan rydde op
const ActivityForm = ({ activity = null, onDone }) => {
  const { createActivity, updateActivity } = useFetchActivities();
  const navigate = useNavigate();
   const [selectedFile, setSelectedFile] = useState(null);
   const [image, setImage] = useState(null);

  // Er vi ved at redigere en eksisterende aktivitet? Det er vi hvis activity ikke er null
  const isEdit = Boolean(activity);

  // Forhåndsvis billede
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const objUrl = window.URL.createObjectURL(file);
      setImage(objUrl);
    }
  };

  // Yup valideringsskema - reglerne for hvad brugeren skal udfylde.
  // Billedet håndteres som en fil (selectedFile), ikke via react-hook-form, så det er ikke i skemaet.
  const schema = yup.object().shape({
    title: yup.string().required("Titel er påkrævet"),
    description: yup.string().required("Beskrivelse er påkrævet"),
    date: yup.string().required("Dato er påkrævet"),
    fromTime: yup.string().required("Starttid er påkrævet"),
    toTime: yup.string().required("Sluttid er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  // Når vi skifter til at redigere en aktivitet, udfylder vi formularen med dens data.
  // activity.time er gemt som "fraTid-tilTid", så vi splitter den op igen.
  useEffect(() => {
    if (activity) {
      const [fromTime = "", toTime = ""] = (activity.time || "").split("-");
      reset({
        title: activity.title || "",
        description: activity.description || "",
        date: activity.date || "",
        fromTime,
        toTime,
      });
      // Vis det eksisterende billede som forhåndsvisning
      setImage(activity.image || null);
      setSelectedFile(null);
    } else {
      reset({
        title: "",
        description: "",
        date: "",
        fromTime: "",
        toTime: "",
      });
      setImage(null);
      setSelectedFile(null);
    }
  }, [activity, reset]);

  // react-hook-form giver os de validerede felter i "data" (ikke et event).
  // Vi bygger en FormData, så vi kan sende både tekstfelter og en billedfil.
  const onSubmit = async (data) => {
    const activityData = new FormData();
    activityData.append("id", activity._id);
    activityData.append("title", data.title);
    activityData.append("description", data.description);
    activityData.append("date", data.date);
    // De to tidsfelter gemmes samlet som "fraTid-tilTid"
    activityData.append("time", `${data.fromTime}-${data.toTime}`);

    // Tilføj billedfilen, hvis brugeren har valgt en
    if (selectedFile) {
      activityData.append("file", selectedFile);
    }

    try {
      const response = isEdit
        ? await updateActivity(activityData)
        : await createActivity(activityData);

      if (response) {
        reset();
        setSelectedFile(null);
        setImage(null);
        onDone?.();
        navigate("/backoffice");
      }
    } catch (error) {
      console.error("Fejl ved håndtering af aktivitet:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>{isEdit ? "Rediger aktivitet" : "Tilføj aktivitet"}</h2>
      <div>
        {/*
        Når htmlFor-attributten på en <label> matcher id-attributten på et <input>-element, oprettes der en forbindelse mellem dem.
        Dette betyder, at når brugeren klikker på etiketten, bliver det tilknyttede inputfelt automatisk aktiveret eller fokuseret.
        Dette gør både brugervenligheden og tilgængeligheden (accessibility) bedre
        */}
        <label htmlFor='title'>Titel:</label>
        <input id='title' type='text' {...register("title")} />
        {errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
      </div>
      <div>
        <label htmlFor='description'>Beskrivelse:</label>
        <input id='description' type='text' {...register("description")} />
        {errors.description && (
          <span className={styles.error}>{errors.description.message}</span>
        )}
      </div>
      <div>
        <label htmlFor='date'>Dage:</label>
        <input id='date' type='text' {...register("date")} />
        {errors.date && (
          <span className={styles.error}>{errors.date.message}</span>
        )}
      </div>
      <div>
        <label htmlFor='fromTime'>Fra kl:</label>
        <input id='fromTime' type='time' {...register("fromTime")} />
        {errors.fromTime && (
          <span className={styles.error}>{errors.fromTime.message}</span>
        )}
      </div>
      <div>
        <label htmlFor='toTime'>Til kl:</label>
        <input id='toTime' type='time' {...register("toTime")} />
        {errors.toTime && (
          <span className={styles.error}>{errors.toTime.message}</span>
        )}
      </div>

      <div>
        <label htmlFor='image'>Billede:</label>
        <input
          id='image'
          type='file'
          accept='image/*'
          onChange={handleImageChange}
        />
        {image && <img className={styles.previewImage} src={image} />}
      </div>

      <Button
        type='submit'
        buttonText={
          isSubmitting
            ? "Gemmer..."
            : isEdit
              ? "Gem ændringer"
              : "Tilføj aktivitet"
        }
        background='green'
      />
      {isEdit && (
        <Button
          type='button'
          buttonText='Annuller'
          variant='small'
          onClick={() => onDone?.()}
        />
      )}
    </form>
  );
};

export default ActivityForm;
