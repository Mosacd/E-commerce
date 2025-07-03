import { useState } from "react";
import styles from './Details.module.css';

const ContactForm = () => {
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const validateContact = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{7,15}$/;

    if (!value.trim()) {
      return "Contact is required";
    }

    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return "Enter a valid email or phone number";
    }

    return "";
  };

  const handleBlur = () => {
    const validationError = validateContact(contact);
    setError(validationError);
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <input
        type="text"
        placeholder="Email or mobile phone number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        onBlur={handleBlur}
        className={`${styles.input} ${error ? styles.invalid : ""}`}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default ContactForm;
