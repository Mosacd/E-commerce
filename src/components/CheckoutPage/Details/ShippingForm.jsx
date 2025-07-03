import styles from './Details.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"; 

const ShippingForm = ({ onNext, contact, validateContact, setContactError }) => {
  const [form, setForm] = useState({
    name: '',
    secondName: '',
    address: '',
    note: '',
    city: '',
    postalCode: '',
    province: '',
    country: '',
    saveInfo: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Required';
    if (!form.secondName.trim()) newErrors.secondName = 'Required';
    if (!form.address.trim()) newErrors.address = 'Required';
    if (!form.city.trim()) newErrors.city = 'Required';
    if (!form.postalCode.trim()) newErrors.postalCode = 'Required';
    if (!form.province) newErrors.province = 'Required';
    if (!form.country) newErrors.country = 'Required';
    return newErrors;
  };

  const handleSubmit = () => {
    const foundErrors = validate();
    const contactError = validateContact(contact);

    if (contactError) {
      setContactError(contactError);
    } else {
      setContactError('');
    }

    if (Object.keys(foundErrors).length > 0 || contactError) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      onNext();
    }
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Shipping Address</h2>

      <div className={styles.row2}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div>
          <input
            type="text"
            name="secondName"
            placeholder="Second Name"
            value={form.secondName}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.secondName && <p className={styles.error}>{errors.secondName}</p>}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="address"
          placeholder="Address and number"
          value={form.address}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.address && <p className={styles.error}>{errors.address}</p>}
      </div>

      <input
        type="text"
        name="note"
        placeholder="Shipping note (optional)"
        value={form.note}
        onChange={handleChange}
        className={styles.input}
      />

      <div className={styles.row3}>
        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.city && <p className={styles.error}>{errors.city}</p>}
        </div>
        <div>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={form.postalCode}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.postalCode && <p className={styles.error}>{errors.postalCode}</p>}
        </div>

        <div className={styles.selectWrapper}>
          <label htmlFor="province" className={styles.label}>Province</label>
          <select
            name="province"
            value={form.province}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="" disabled hidden>Province</option>
            <option value="milano">Milano</option>
            <option value="roma">Roma</option>
            <option value="napoli">Napoli</option>
            <option value="torino">Torino</option>
          </select>
          {errors.province && <p className={styles.error}>{errors.province}</p>}
        </div>
      </div>

      <div className={styles.selectWrapper}>
        <label htmlFor="country" className={styles.label}>Country/Region</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="" disabled hidden>Country/Region</option>
          <option value="italy">Italy</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="spain">Spain</option>
        </select>
        {errors.country && <p className={styles.error}>{errors.country}</p>}
      </div>

      <label className={styles.checkboxRow}>
        <input
          type="checkbox"
          name="saveInfo"
          checked={form.saveInfo}
          onChange={handleChange}
          className={styles.checkbox}
        />
        <span>Save this information for a future fast checkout</span>
      </label>

      <div className={styles.buttonRow}>
        <button
          className={styles.backButton}
          onClick={() => navigate("/cart")}
        >
          Back to cart
        </button>
        <button
          className={styles.nextButton}
          onClick={handleSubmit}
        >
          Go to shipping
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
