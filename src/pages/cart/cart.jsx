import styles from "./cart.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart/hooks/useCartContext";

const Cart = () => {


     const { cart, changeQuantity, changeSize  } = useCartContext();


      const [ItemSize, setItemSize] = useState();

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);



    return(
        <div className={styles.container}>
            <h1 className={styles.cartTitle}>
                CART
            </h1>

            <div className={styles.cartContent}>
            <div className={styles.header}>
            </div>
            
            <div className={styles.itemsList}>
                {cart.filter((item) => item && item.quantity > 0).map((item) => (
                    <div key={`${item.id}-${item.size}`} className={styles.cartItem}>
                        <div className={styles.itemDetails}>
                             <h1 className={styles.itemName}>{item.name.split(" ")[0]}</h1>
          <h1 className={styles.itemType}>
            {item.name.split(" ")[1]} {item.name.split(" ")[2]}
          </h1>
                            <div className={styles.itemPrice}>${Number(item.price).toFixed(2)}</div>
                            
                            <div className={styles.sizeSection}>
                                <h4 className={styles.sizeText}>SIZE:</h4>
          <div className={styles.sizeButtonWrapper}>
            {["XS", "S", "M", "L"].map((size) => (
              <button
                onClick={() => 
                    changeSize(item.id, item.size, size)
            }
                key={size}
                className={`${styles.sizeBtn} ${item.size === size ? styles.selected : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
                            </div>
                        </div>
                        
                        <div className={styles.itemRight}>
                            <div className={styles.quantityControls}>
                                <button 
                                    className={styles.quantityBtn}
                                    onClick={() => changeQuantity(item.id, item.size, "increment")}
                                >
                                    +
                                </button>
                                <span className={styles.quantity}>{item.quantity}</span>
                                <button 
                                    className={styles.quantityBtn}
                                    onClick={() => changeQuantity(item.id, item.size, "decrement")}
                                >
                                    -
                                </button>
                            </div>
                            <img 
                                src={item.image[0]} 
                                alt={item.name}
                                className={styles.itemImage}
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            <div className={styles.footer}>
                
                  <div className={styles.totalQ}>
                 <span className={styles.totalQuantityLabel}>Quantity:</span>
                <span className={styles.totalAmount}>{totalQuantity}</span>
                 </div>
                <div className={styles.total}>
                    <span className={styles.totalLabel}>Total:</span>
                    <span className={styles.totalAmount}>${total.toFixed(2)}</span>
                </div>
                
             
                    <Link  className={styles.checkoutLink} to={"/"}>
                    <button className={styles.checkoutBtn}>Continue</button>
                    </Link>
               
            </div>
        </div>
            
        </div>
    )

}


export default Cart;