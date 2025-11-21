import { AiOutlineFacebook } from "react-icons/ai";
import styles from "./footer.module.css";
import logo from "/logo.png";
import { RiFacebookBoxLine, RiInstagramFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.soMe}>
        <FaSquareFacebook size={50} />
        <RiInstagramFill size={50} />
      </div>
      <div>
        <img src={logo} alt='logo' />
        <h5>Gittes Glamping</h5>
      </div>
    </footer>
  );
};

export default Footer;
