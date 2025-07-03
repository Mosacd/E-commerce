import styles from "./PaymentMethod.module.css";
import { ReactComponent as Lock } from "../../../assets/LockFill.svg";
import { ReactComponent as CreditCard } from "../../../assets/CreditCardFill.svg";
import { ReactComponent as InfoSquare } from "../../../assets/InfoSquareFill.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../../context/checkout";
import { useCurrencyContext } from "../../../context/currency/hooks/useCurrencyContext";

const PaymentMethod = () => {
  const navigate = useNavigate();

  const { contact, shippingAddress, shippingMethod, completeOrder } =
    useCheckout();
     const {convert, currency } = useCurrencyContext();

  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  //again I'm formating shipping address here
  const formatAddress = () => {
    if (!shippingAddress) return "Address not set";
    return `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.province}, ${shippingAddress.country}`;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
      newErrors.cardNumber = "Must be 16 digits";
    }

    if (!holderName.trim()) {
      newErrors.holderName = "Card holder name is required";
    }

    if (!expiration.trim()) {
      newErrors.expiration = "Expiration is required";
    } else if (!/^\d{2}\/\d{2}$/.test(expiration)) {
      newErrors.expiration = "Format MM/YY";
    }

    if (!cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = "Must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      completeOrder(); // I'm generating a random number for order number
      navigate("/checkout/confirmation");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.infoBox}>
          <span className={styles.label}>Contact:</span>
          <span className={styles.value}>{contact}</span>
        </div>
        <div
          className={styles.infoBox}
          style={{ borderTop: "1px solid #56B28033" }}
        >
          <span className={styles.label}>Ship to:</span>
          <span className={styles.value}>{formatAddress()}</span>
        </div>
        <div
          className={styles.infoBox}
          style={{ borderTop: "1px solid #56B28033" }}
        >
          <span className={styles.label}>Shipping Method:</span>
          <span className={styles.value}>
            {shippingMethod === "standard"
              ? "Standard Shipping – Free"
              : `Express Shipping – ${currency=== "USD" ? "$" : currency === "EUR" ? "€" : "¥" }${convert(4.99).toFixed(2)}`}
          </span>
        </div>
      </div>

      <div className={styles.formBox}>
        <h2 className={styles.heading}>Payment method</h2>

        <div className={styles.cardSection}>
          <div className={styles.cardHeader}>
            <CreditCard />
            <span className={styles.cardText}>Credit Card</span>
          </div>

          <div className={styles.cardForm}>
            <div className={styles.iconInput}>
              <input
                required
                type="text"
                placeholder="Card Number"
                className={`${styles.input} ${
                  errors.cardNumber ? styles.invalid : ""
                }`}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <Lock className={styles.iconLock} />
            </div>
            {errors.cardNumber && (
              <div className={styles.error}>{errors.cardNumber}</div>
            )}

            <input
              required
              type="text"
              placeholder="Holder Name"
              className={`${styles.input} ${
                errors.holderName ? styles.invalid : ""
              }`}
              value={holderName}
              onChange={(e) => setHolderName(e.target.value)}
            />
            {errors.holderName && (
              <div className={styles.error}>{errors.holderName}</div>
            )}

            <div className={styles.row2}>
              <input
                required
                type="text"
                placeholder="Expiration (MM/YY)"
                className={`${styles.input} ${
                  errors.expiration ? styles.invalid : ""
                }`}
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
              />
              <div className={styles.iconInput}>
                <input
                  required
                  type="text"
                  placeholder="CVV"
                  className={`${styles.input} ${
                    errors.cvv ? styles.invalid : ""
                  }`}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
                <InfoSquare className={styles.iconInfo} />
              </div>
            </div>
            {errors.expiration && (
              <div className={styles.error}>{errors.expiration}</div>
            )}
            {errors.cvv && <div className={styles.error}>{errors.cvv}</div>}
          </div>
        </div>

        <div className={styles.navRow}>
          <button
            onClick={() => navigate("/checkout/shipping")}
            className={styles.backButton}
          >
            Back to shipping
          </button>
          <button onClick={handleSubmit} className={styles.nextButton}>
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
