import styles from './Details.module.css';
import { useState } from 'react';

const ContactForm = ({ contact, setContact, error, onBlur }) => {
  const [localError, setLocalError] = useState('');
  
  const validate = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{7,15}$/;
    
    if (!value.trim()) return "Contact is required";
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return "Enter a valid email or phone number";
    }
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setContact(value);
    
    // lets clear error when user is typing
    if (localError) setLocalError('');
  };

  const handleBlur = (e) => {
    const errorMsg = validate(e.target.value);
    setLocalError(errorMsg);
    if (onBlur) onBlur(errorMsg);
  };

  //I'll show either local validation error or parent's error
  const displayError = localError || error;

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <input
        required
        type="text"
        placeholder="Email or mobile phone number"
        value={contact}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${styles.input} ${displayError ? styles.invalid : ""}`}
      />
      {displayError && <div className={styles.error}>{displayError}</div>}
    </div>
  );
};

export default ContactForm;