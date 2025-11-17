import { useForm } from "react-hook-form";
import styles from "./contactForm.module.css";
import Button from "../button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const ContactForm = () => {
  // Yup valideringsskema - her definerer vi reglerne hvad brugeren skal udfylde
  const schema = yup.object().shape({
    name: yup.string().required("Navn er påkrævet"),
    email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
    subject: yup.string().required("Emne er påkrævet"),
    message: yup
      .string()
      .min(10, "Besked skal være på mindst 10 tegn")
      .required("Besked er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Serverfejl");
      } else {
        toast.success("Besked sendt!");
        reset();
      }
    } catch (error) {
      console.log(("Fejl:", error));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>Navn</label>
      <input type='text' {...register("name")} />
      {errors.name && (
        <span className={styles.error}>{errors.name.message}</span>
      )}
      <label>Email</label>
      <input type='email' {...register("email")} />
      {errors.email && (
        <span className={styles.error}>{errors.email.message}</span>
      )}

      <label>Hvad drejer henvendelsen sig om?</label>
      <input type='text' {...register("subject")} />
      <label>Besked (Skriv dato’er, hvis det drejer sig om en booking)</label>
      <textarea rows='5' {...register("message")} />
      <Button buttonText={isSubmitting ? "Sender..." : "Indsend"} />
    </form>
  );
};

export default ContactForm;
