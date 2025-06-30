import { useState } from 'react';
import Header from "./header/header";
import styles from './layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    return (
        <div >
            <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <div className={styles.content}>
                {isCartOpen && <div className={styles.overlay} />}
                <Outlet/>
            </div>
       </div>
    );
};

export default Layout;