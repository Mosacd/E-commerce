import { useLocation } from "react-router-dom";
import styles from "./LayoutCheckout.module.css";
import ProgressBar from "../ui/ProgressBar";
import CartSummary from "../CartSummary/CartSummary";

const LayoutCheckout = ({ children }) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const currentStep = pathParts[pathParts.length - 1];

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <div className={styles.container}>
          <ProgressBar currentStep={currentStep} />
          {children}
        </div>
      </div>
      <div
        className={`${styles.rightColumn} ${
          currentStep === "details" ? styles.transparentRight : ""
        }`}
      >
        <CartSummary currentStep={currentStep} />
      </div>
    </div>
  );
};

export default LayoutCheckout;
