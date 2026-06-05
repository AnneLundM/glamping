// npm i react-hook-form
import { useForm } from "react-hook-form";
// npm i yup
// npm i @hookform/resolvers/yup
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate} from "react-router-dom";
import styles from "./form.module.css";
import Button from "../../../components/button/Button";
import { useFetchActivities } from "../hooks/useFetchActivities";

const ActivityForm = () => {
  const { createActivity } = useFetchActivities();
  const navigate = useNavigate();

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
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  // Live-preview af billedet, mens brugeren skriver url'en
  const imageUrl = watch("image");

  // react-hook-form giver os de validerede felter i "data"
  const onSubmit = async (data) => {
    // Vi sender et almindeligt objekt som JSON (ikke FormData), da billedet nu er en url-streng.
    const activity = {
      title: data.title,
      description: data.description,
      date: data.date,
      time: `${data.fromTime}-${data.toTime}`,
      image: data.image
    };

    console.log(activity)

    try {
      const res = await createActivity(activity);
      if (res) {
        navigate("/activities");
      }
    } catch (err) {
      console.error("Fejl ved oprettelse af aktivitet:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Tilføj aktivitet</h2>
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
        buttonText={isSubmitting ? "Gemmer..." : "Tilføj aktivitet"}
        background='green'
      />
    </form>
  );
};

export default ActivityForm;
