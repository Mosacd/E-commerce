import { useState } from 'react';
import Header from "./header/header";
import Catalog from "../pages/catalog/catalog";
import styles from './layout.module.css';

const Layout = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    return (
        <div >
            <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <div className={styles.content}>
                {isCartOpen && <div className={styles.overlay} />}
                <Catalog />
            </div>
       </div>
    );
};

export default Layout;