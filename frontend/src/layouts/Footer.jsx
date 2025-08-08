import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by Cypher with <img src="coffee.svg" />
      </p>
    </footer>
  );
};

export default Footer;
