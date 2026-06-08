// npm i react-hook-form
import { useForm } from "react-hook-form";
// npm i yup
// npm i @hookform/resolvers/yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import Button from "../../../components/button/Button";
import { useFetchActivities } from "../hooks/useFetchActivities";

// activity: hvis den er sat, er vi i "rediger"-tilstand
// onDone: kaldes når en redigering er færdig (eller annulleres), så forælderen kan rydde op
const ActivityForm = ({ activity = null, onDone }) => {
  const { createActivity, updateActivity } = useFetchActivities();
  const navigate = useNavigate();

  // Er vi ved at redigere en eksisterende aktivitet? Det er vi hvis activity ikke er null
  const isEdit = Boolean(activity);

  // Yup valideringsskema - reglerne for hvad brugeren skal udfylde.
  const schema = yup.object().shape({
    title: yup.string().required("Titel er påkrævet"),
    description: yup.string().required("Beskrivelse er påkrævet"),
    date: yup.string().required("Dato er påkrævet"),
    fromTime: yup.string().required("Starttid er påkrævet"),
    toTime: yup.string().required("Sluttid er påkrævet"),
    // Billedet er en URL-streng (valgfrit). Tom værdi → undefined, så url-tjekket springes over.
    image: yup
      .string()
      .transform((value) => (value === "" ? undefined : value))
      .url("Indtast en gyldig URL"),
  });

  const {
    register,
    handleSubmit,
    watch,
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
        image: activity.image || "",
      });
    } else {
      reset({
        title: "",
        description: "",
        date: "",
        fromTime: "",
        toTime: "",
        image: "",
      });
    }
  }, [activity, reset]);

  // Live-preview af billedet, mens brugeren skriver url'en
  const imageUrl = watch("image");

  // react-hook-form giver os de validerede felter i "data"
  const onSubmit = async (data) => {
    // Vi sender et almindeligt objekt som JSON (ikke FormData), da billedet nu er en url-streng.
    const activityData = {
      title: data.title,
      description: data.description,
      date: data.date,
      time: `${data.fromTime}-${data.toTime}`,
      image: data.image,
    };

    try {
      if (isEdit) {
        // Ved opdatering sender vi _id'et i URL'en, så serveren ved hvilken aktivitet der skal opdateres
        await updateActivity(activity._id, activityData);
        onDone?.();
      } else {
        const res = await createActivity(activityData);
        if (res) {
          navigate("/activities");
        }
      }
    } catch (err) {
      console.error("Fejl ved gem af aktivitet:", err);
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
        <label htmlFor='image'>Billede-URL (valgfrit):</label>
        <input
          id='image'
          type='url'
          placeholder='https://...'
          {...register("image")}
        />
        {errors.image && (
          <span className={styles.error}>{errors.image.message}</span>
        )}
        {imageUrl && <img className={styles.previewImage} src={imageUrl} />}
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
