import { useState } from 'react';
import styles from './ShippingMethod.module.css';

const ShippingMethod = ({ onBack, onNext }) => {
  const [selected, setSelected] = useState('standard');

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.infoBox}>
          <span className={styles.label}>Contact</span>
          <span className={styles.value}>joe.spagnuolo@uobly.com</span>
        </div>

        <div className={styles.infoBox} style={{borderTop:"1px solid #56B28033"}}>
          <span className={styles.label}>Ship to</span>
          <span className={styles.value}>Via Firenze 23, 92023, Campobello di Licata AG, Italia</span>
        </div>
      </div> 

      <div className={styles.methodBox}>
        <h2 className={styles.heading}>Shipping Method</h2>

        <label className={styles.option}>
          <div style={{gap:"20px", display:"flex"}}>
            <input
            type="radio"
            name="shipping"
            value="standard"
            checked={selected === 'standard'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Standard Shipping</span>
          </div>
          <span className={styles.price}>Free</span>
        </label>

        <label className={styles.option}>
          <div style={{gap:"20px", display:"flex"}}>
            <input
            type="radio"
            name="shipping"
            value="express"
            checked={selected === 'express'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span>Express Shipping</span>
          </div>
          <span className={styles.price}>$4.99</span>
        </label>

        <div className={styles.navRow}>
          <button onClick={onBack} className={styles.backButton}>
            Back to details
          </button>
          <button onClick={onNext} className={styles.nextButton}>
            Go to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
