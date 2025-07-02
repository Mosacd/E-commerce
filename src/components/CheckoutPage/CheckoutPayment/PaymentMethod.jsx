import { useState } from "react";
import styles from './PaymentMethod.module.css';

const PaymentMethod = ({ onBack, onNext }) => {
  const [selected, setSelected] = useState("credit");

  return (
    <div className={styles.container}>
      {/* Contact Info */}
      <div className={styles.infoBox}>
        <span className={styles.label}>Contact:</span>
        <span className={styles.value}>joe.spagnuolo@uobly.com</span>
      </div>

      {/* Ship to */}
      <div className={styles.infoBox}>
        <span className={styles.label}>Ship to:</span>
        <span className={styles.value}>Via Firenze 23, Campobello di Licata AG</span>
      </div>

      {/* Method */}
      <div className={styles.infoBox}>
        <span className={styles.label}>Shipping Method:</span>
        <span className={styles.value}>Standard Shipping – Free</span>
      </div>

      {/* Payment Form */}
      <div className={styles.formBox}>
        <h2 className={styles.heading}>Payment method</h2>

        <div className={styles.cardForm}>
          <input type="text" placeholder="Card Number" className={styles.input} />
          <input type="text" placeholder="Holder Name" className={styles.input} />

          <div className={styles.row2}>
            <input type="text" placeholder="Expiration (MM/YY)" className={styles.input} />
            <input type="text" placeholder="CVV" className={styles.input} />
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navRow}>
          <button onClick={onBack} className={styles.backButton}>Back to shipping</button>
          <button onClick={onNext} className={styles.nextButton}>Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
