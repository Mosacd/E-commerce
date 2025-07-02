import styles from './CartSummary.module.css';

const CartSummary = ({ currentStep }) => {
  const showFreeShipping = currentStep === 'payment';

  return (
    <div className={styles.summaryCard}>
      <div className={styles.item}>
        <div className={styles.imageWrapper}>
          <img
            src="/lovable-uploads/167d5b0a-1e41-44ed-a25e-ad378fbd1aa5.png"
            alt="Running Short"
            className={styles.image}
          />
          <div className={styles.quantityBadge}>1</div>
        </div>
        <div>
          <h3 className={styles.title}>Running Short</h3>
          <p className={styles.price}>$50.00</p>
        </div>
      </div>

      <div className={styles.breakdown}>
        <div className={styles.row}>
          <span>Subtotal</span>
          <span style={{color: "#272727"}}>$50.00</span>
        </div>
        <div className={styles.row}>
          <span>Shipping</span>
          <span>{showFreeShipping ? 'Free Shipping' : 'Calculated at the next step'}</span>
        </div>
        <div className={styles.total}>
        <span>Total</span>
        <span style={{ fontSize: '24px', fontWeight: "500" }}>$50.00</span>
      </div>
      </div>

    
    </div>
  );
};

export default CartSummary;
