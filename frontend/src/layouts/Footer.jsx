import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by{" "}
        <a
          href="https://github.com/ShahabCypher"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Cypher
        </a>{" "}
        with <img src="coffee.svg" />
      </p>
    </footer>
  );
};

export default Footer;
