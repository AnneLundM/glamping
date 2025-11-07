import styles from "./button.module.css";

const Button = ({ buttonText, onClick, variant = "default" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      <p>{buttonText}</p>
    </button>
  );
};

export default Button;
