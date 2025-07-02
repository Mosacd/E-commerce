import styles from './LayoutCheckout.module.css';
import ProgressBar from '../ui/ProgressBar';
import CartSummary from '../CartSummary/CartSummary';

const LayoutCheckout = ({ children, currentStep }) => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.container}>
            <ProgressBar currentStep={currentStep} />
            {children}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <CartSummary currentStep={currentStep} />
        </div>
      </div>
  );
};

export default LayoutCheckout;
