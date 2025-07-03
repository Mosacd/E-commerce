import { useNavigate } from 'react-router-dom';
import styles from './ShippingMethod.module.css';
import { useCheckout } from '../../../context/checkout';
import { useCurrencyContext } from '../../../context/currency/hooks/useCurrencyContext';

const ShippingMethod = () => {

  const navigate = useNavigate();
  const { 
    shippingMethod, 
    setShippingMethod, 
    contact, 
    shippingAddress 
  } = useCheckout();

  const {convert, currency } = useCurrencyContext();

  //I'll Format shipping address here
  const formatAddress = () => {
    if (!shippingAddress) return 'Address not set';
    
    return `${shippingAddress.address}, ${shippingAddress.postalCode}, ${shippingAddress.city}, ${shippingAddress.province}, ${shippingAddress.country}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.infoBox}>
          <span className={styles.label}>Contact</span>
          <span className={styles.value}>{contact || 'joe.spagnuolo@uobly.com'}</span>
        </div>

        <div className={styles.infoBox} style={{borderTop:"1px solid #56B28033"}}>
          <span className={styles.label}>Ship to</span>
          <span className={styles.value}>{formatAddress()}</span>
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
              checked={shippingMethod === 'standard'}
              onChange={(e) => setShippingMethod('standard')}
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
              checked={shippingMethod === 'express'}
              onChange={(e) => setShippingMethod('express')}
            />
            <span>Express Shipping</span>
          </div>
          <span className={styles.price}>{currency=== "USD" ? "$" : currency === "EUR" ? "€" : "¥" }{convert(4.99).toFixed(2)}</span>
        </label>

        <div className={styles.navRow}>
          <button 
            onClick={() => navigate('/checkout/details')} 
            className={styles.backButton}
          >
            Back to details
          </button>
          <button 
            onClick={() => navigate('/checkout/payment')} 
            className={styles.nextButton}
          >
            Go to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;