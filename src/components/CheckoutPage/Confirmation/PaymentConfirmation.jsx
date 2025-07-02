import ShippingLayout from "../LayoutCheckout/LayoutCheckout";
import styles from "./PaymentConfirmation.module.css";

const PaymentConfirmation = () => {
  return (
    <ShippingLayout currentStep="confirmation">
      <div className={styles.confirmationBox}>
        <div className={styles.iconCircle}>
          <span className={styles.checkmark}>✓</span>
        </div>

        <h2 className={styles.title}>Payment Confirmed</h2>
        <p className={styles.orderId}>ORDER #2039</p>

        <button className={styles.backButton}>Back to shopping</button>
      </div>
    </ShippingLayout>
  );
};

export default PaymentConfirmation;
