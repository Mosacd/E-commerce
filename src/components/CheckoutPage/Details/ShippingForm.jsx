import styles from './Details.module.css';

const ShippingForm = ({ onNext }) => {
  
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Shipping Address</h2>

      <div className={styles.row2}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="text" placeholder="Second Name" className={styles.input} />
      </div>

      <input type="text" placeholder="Address and number" className={styles.input} />
      <input type="text" placeholder="Shipping note (optional)" className={styles.input} />

      <div className={styles.row3}>
        <input type="text" placeholder="City" className={styles.input} />
        <input type="text" placeholder="Postal Code" className={styles.input} />
        <div className={styles.selectWrapper}>
          <label htmlFor="province" className={styles.label}>Province</label>
          <select id="province" className={styles.select}>
            <option value="" disabled selected hidden>Province</option>
            <option value="milano">Milano</option>
            <option value="roma">Roma</option>
            <option value="napoli">Napoli</option>
            <option value="torino">Torino</option>
          </select>
        </div>

      </div>


      <div className={styles.selectWrapper}>
          <label htmlFor="province" className={styles.label}>Country/Region</label>
          <select className={styles.select}>
            <option value="italy" disabled selected hiddens>Italy</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="spain">Spain</option>
          </select>
        </div>

      

      <label className={styles.checkboxRow}>
        <input type="checkbox" className={styles.checkbox} />
        <span>Save this information for a future fast checkout</span>
      </label>

      <div className={styles.buttonRow}>
        <button className={styles.backButton}>Back to cart</button>
        <button className={styles.nextButton} onClick={onNext}>Go to shipping</button>
      </div>
    </div>
  );
};

export default ShippingForm;
