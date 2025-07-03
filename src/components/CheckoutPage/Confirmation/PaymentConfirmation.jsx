import ShippingLayout from "../LayoutCheckout/LayoutCheckout";
import styles from "./PaymentConfirmation.module.css";
import { ReactComponent as CheckIcon } from '../../../assets/CheckCircle.svg';
import { useNavigate } from "react-router-dom"; 

const PaymentConfirmation = () => {
  const navigate = useNavigate();

  return (
    <ShippingLayout currentStep="confirmation">
      <div className={styles.confirmationBox}>
        <div className={styles.iconCircle}>
          <CheckIcon className={styles.checkmark} />
        </div>

        <h2 className={styles.title}>Payment Confirmed</h2>
        <p className={styles.orderId}>ORDER #2039</p>

        <button
          className={styles.backButton}
          onClick={() => navigate("/")} 
        >
          Back to shopping
        </button>
      </div>
    </ShippingLayout>
  );
};


export default PaymentConfirmation;
