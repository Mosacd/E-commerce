import styles from './CartSummary.module.css';
import { useCartContext } from '../../../context/cart/hooks/useCartContext';
import { useCurrencyContext } from '../../../context/currency/hooks/useCurrencyContext';
import { useCheckout } from '../../../context/checkout';

const CartSummary = ({ currentStep }) => {
  const {cart} = useCartContext()
  const {convert, currency} = useCurrencyContext()
  const { shippingMethod } = useCheckout();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Calculate shipping cost
  const shippingCost = shippingMethod === 'express' ? 4.99 : 0;
  const total = subtotal + shippingCost;

    
  // const showFreeShipping = currentStep === 'payment';

  return (
     <div className={styles.summaryCard}>

    {cart.map(item => {
      return(
      
      <div className={styles.item} key={`${item.id}-${item.size}`}>
        <div className={styles.imageWrapper}>
          <img
            src={item.img[0]}
            alt="Running Short"
            className={styles.image}
          />
          <div className={styles.quantityBadge}>{item.quantity}</div>
        </div>
        <div style={{width:"100%"}}>
          <h3 className={styles.title}>{item.name}</h3>
          <div className={styles.lowerdiv}>
          <p className={styles.price}>{currency=== "USD" ? "$" : currency === "EUR" ? "€" : "¥" }{convert(item.price * item.quantity).toFixed(2)}</p>
          <div className={styles.sizediv}>{item.size}</div>
          </div>
        </div>
      </div>
      )
    }
    )
    
      }
       <div className={styles.breakdown}>
        <div className={styles.row}>
          <span>Subtotal</span>
          <span style={{color: "#272727"}}>{currency=== "USD" ? "$" : currency === "EUR" ? "€" : "¥" }{convert(subtotal).toFixed(2)}</span>
        </div>
       <div className={styles.row}>
          <span>Shipping</span>
          <span className={currentStep !== 'details' && styles.shipping}>
            {currentStep === 'details' 
              ? 'Calculated at next step'
              : shippingMethod === 'standard' 
                ? 'Free Shipping' 
                : `${currency=== "USD" ? "$" : currency === "EUR" ? "€" : "¥" }${convert(shippingCost).toFixed(2)}`
            }
          </span>
        </div>
        <div className={styles.total}>
        <span>Total</span>
        <span style={{ fontSize: '24px', fontWeight: "500", color:"#272727" }}>{currency=== "USD" ? "$" : currency === "EUR" ? "€" : "¥" }{convert(total).toFixed(2)}</span>
      </div>
      </div>

  </div>
    
  );
};

export default CartSummary;
