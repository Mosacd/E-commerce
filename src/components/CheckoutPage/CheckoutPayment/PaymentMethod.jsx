import styles from './PaymentMethod.module.css';

const PaymentMethod = ({ onBack, onNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.infoBox}>
          <span className={styles.label}>Contact:</span>
          <span className={styles.value}>joe.spagnuolo@uobly.com</span>
        </div>
        <div className={styles.infoBox} style={{ borderTop: "1px solid #56B28033" }}>
          <span className={styles.label}>Ship to:</span>
          <span className={styles.value}>Via Firenze 23, Campobello di Licata AG</span>
        </div>
        <div className={styles.infoBox} style={{ borderTop: "1px solid #56B28033" }}>
          <span className={styles.label}>Shipping Method:</span>
          <span className={styles.value}>Standard Shipping – Free</span>
        </div>
      </div>

      <div className={styles.formBox}>
        <h2 className={styles.heading}>Payment method</h2>

        <div className={styles.cardSection}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}></div>
            <span className={styles.cardText}>Credit Card</span>
          </div>

          <div className={styles.cardForm}>
            <div className={styles.iconInput}>
              <input type="text" placeholder="Card Number" className={styles.input} />
              <span className={styles.iconLock}>🔒</span>
            </div>

            <input type="text" placeholder="Holder Name" className={styles.input} />

            <div className={styles.row2}>
              <input type="text" placeholder="Expiration (MM/YY)" className={styles.input} />
              <div className={styles.iconInput}>
                <input type="text" placeholder="CVV" className={styles.input} />
                <span className={styles.iconInfo}>ℹ️</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.navRow}>
          <button onClick={onBack} className={styles.backButton}>Back to shipping</button>
          <button onClick={onNext} className={styles.nextButton}>Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
