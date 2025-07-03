import ShippingLayout from "../LayoutCheckout/LayoutCheckout";
import styles from "./PaymentConfirmation.module.css";
import { ReactComponent as CheckIcon } from "../../../assets/CheckCircle.svg";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../../context/checkout";
import { useCartContext } from "../../../context/cart/hooks/useCartContext";

const PaymentConfirmation = () => {
  const navigate = useNavigate();

  const { resetCheckout, orderNumber } = useCheckout();
  const { clearCart } = useCartContext();

  //I'm reseting cart and checkout info when we press back to shopping button
  //might move this to payment method section on pay now button
  const handleBackToShopping = () => {
    clearCart();
    resetCheckout();
    navigate("/");
  };

  return (
    <ShippingLayout>
      <div className={styles.confirmationBox}>
        <div className={styles.iconCircle}>
          <CheckIcon className={styles.checkmark} />
        </div>

        <h2 className={styles.title}>Payment Confirmed</h2>
        <p className={styles.orderId}>ORDER {orderNumber}</p>

        <button className={styles.backButton} onClick={handleBackToShopping}>
          Back to shopping
        </button>
      </div>
    </ShippingLayout>
  );
};

export default PaymentConfirmation;
