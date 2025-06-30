import { useState, useEffect, useRef } from 'react';
import styles from './cartDropdown.module.css';
import apolo from "../../assets/items/apolo.png"

const CartDropdown = ({ isOpen, setIsOpen }) => {
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

    const dropdownRef = useRef(null);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div style={{position:"relative"}} ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.cart}>
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z" />
                    <path d="M8.44437 13.9814C7.2443 13.9814 6.25488 14.9276 6.25488 16.0751C6.25488 17.2226 7.24439 18.1688 8.44437 18.1688C9.64445 18.1696 10.6339 17.2234 10.6339 16.0757C10.6339 14.928 9.64436 13.9812 8.44437 13.9812V13.9814ZM8.44437 16.9011C7.9599 16.9011 7.58071 16.5385 7.58071 16.0752C7.58071 15.6119 7.9599 15.2493 8.44437 15.2493C8.92885 15.2493 9.30804 15.6119 9.30804 16.0752C9.30722 16.5188 8.90748 16.9011 8.44437 16.9011Z" />
                    <path d="M15.6875 13.9814C14.4875 13.9814 13.498 14.9277 13.498 16.0752C13.498 17.2226 14.4876 18.1689 15.6875 18.1689C16.8875 18.1689 17.877 17.2226 17.877 16.0752C17.8565 14.9284 16.8875 13.9814 15.6875 13.9814ZM15.6875 16.9011C15.2031 16.9011 14.8239 16.5385 14.8239 16.0752C14.8239 15.612 15.2031 15.2493 15.6875 15.2493C16.172 15.2493 16.5512 15.612 16.5512 16.0752C16.5512 16.5188 16.1506 16.9011 15.6875 16.9011Z" />
                </svg>
            </button>

            {isOpen && (
                <div className={styles.cartDropdown}>
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
                    <button className={styles.viewBagBtn}>VIEW BAG</button>
                    <button className={styles.checkoutBtn}>CHECK OUT</button>
                </div>
            </div>
        </div>
            )}
        </div>
    );
};

export default CartDropdown;