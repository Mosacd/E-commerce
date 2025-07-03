import styles from "./Details.module.css";

const ContactForm = ({ contact, setContact, error }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <input
        type="text"
        placeholder="Email or mobile phone number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className={`${styles.input} ${error ? styles.invalid : ""}`}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default ContactForm;
