import styles from './Details.module.css';

const ContactForm = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <input
        type="text"
        placeholder="Email or mobile phone number"
        className={styles.input}
      />
    </div>
  );
};

export default ContactForm;
