import styles from "./cart.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import apolo from "../../assets/items/apolo.png"
const Cart = () => {

      const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Apollo Running Short',
            price: 50.00,
            size: 'S',
            quantity: 1,
            image: apolo
        },
        {
            id: 2,
            name: 'Jupiter Wayfarer',
            price: 75.00,
            size: 'S',
            quantity: 2,
            image: '/api/placeholder/80/80'
        },
    ]);

      const [ItemSize, setItemSize] = useState();

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);


    return(
        <div className={styles.container}>
            <h1 className={styles.cartTitle}>
                CART
            </h1>

            <div className={styles.cartContent}>
            <div className={styles.header}>
            </div>
            
            <div className={styles.itemsList}>
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.itemDetails}>
                             <h1 className={styles.itemName}>{item.name.split(" ")[0]}</h1>
          <h1 className={styles.itemType}>
            {item.name.split(" ")[1]} {item.name.split(" ")[2]}
          </h1>
                            <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                            
                            <div className={styles.sizeSection}>
                                <h4 className={styles.sizeText}>SIZE:</h4>
          <div className={styles.sizeButtonWrapper}>
            {["XS", "S", "M", "L"].map((size) => (
              <button
                onClick={() => {
                  setItemSize(size);
                }}
                key={size}
                className={`${styles.sizeBtn} ${
                  ItemSize === size ? styles.selected : ""
                }`}
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
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                                <span className={styles.quantity}>{item.quantity}</span>
                                <button 
                                    className={styles.quantityBtn}
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                            </div>
                            <img 
                                src={item.image} 
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
                <span className={styles.totalAmount}>3</span>   
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