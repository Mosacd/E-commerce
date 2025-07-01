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
        }
    ]);

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
                <h3>My Bag, {cartItems.length} items</h3>
            </div>
            
            <div className={styles.itemsList}>
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.itemDetails}>
                            <h4 className={styles.itemName}>{item.name}</h4>
                            <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
                            
                            <div className={styles.sizeSection}>
                                <span className={styles.sizeLabel}>Size:</span>
                                <div className={styles.sizeOptions}>
                                    {['XS', 'S', 'M', 'L'].map(size => (
                                        <button 
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
                <div className={styles.total}>
                    <span className={styles.totalLabel}>Total</span>
                    <span className={styles.totalAmount}>${total.toFixed(2)}</span>
                </div>
                
                <div className={styles.actions}>
                   <Link className={styles.bagLink} to={"/cart"}> <button className={styles.viewBagBtn}>VIEW BAG</button></Link>
                    <Link  className={styles.checkoutLink} to={"/"}>
                    <button className={styles.checkoutBtn}>CHECK OUT</button>
                    </Link>
                </div>
            </div>
        </div>
            
        </div>
    )

}


export default Cart;