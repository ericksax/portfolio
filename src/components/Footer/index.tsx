import styles from "./styles.module.scss";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/";

export const Footer = () => {
  return (
    <IconContext.Provider value={{ className: styles["react-icons"] }}>
      <footer className={styles.container}>
        <section>Social Media</section>
        <aside>
          <FaTwitter size={20} />
          <FaLinkedinIn size={20} />
        </aside>
      </footer>
    </IconContext.Provider>
  );
};
