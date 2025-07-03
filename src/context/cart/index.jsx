import { createContext, useState, useMemo } from "react";


export const CartContext = createContext(null);

export const CartProvider= ({
  children,
}) => {

 const [cart, setCart] = useState([]);
 const [currency, setCurrency] = useState("$ USD")


 const addToCart = (item) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === item.size
    );

    if (existingItem) {
      // I'm increment quantity, If same item with same size exists
      return prevCart.map((cartItem) =>
        cartItem.id === item.id && cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    }

    // otherwise, adding as new one
    return [...prevCart, item];
  });
};


const changeQuantity = (id, size, action) => {
  setCart((prevCart) =>
    prevCart
      .map((item) => {
        if (item.id !== id || item.size !== size) return item;

        const newQuantity = action === "increment"
          ? item.quantity + 1
          : item.quantity - 1;

        return newQuantity < 1 ? null : { ...item, quantity: newQuantity };
      })
      .filter(Boolean)
  );
};


const changeSize = (id, currentSize, newSize) => {
  if (currentSize === newSize) return; // I'm returning early so that if I press the size twice item doesn't get removed

  setCart((prevCart) => {
    const itemIndex = prevCart.findIndex(
      (item) => item.id === id && item.size === currentSize
    );

    if (itemIndex === -1) return prevCart;

    const targetItem = prevCart[itemIndex];

    // Check if same item with new size already exists
    const existingSameItem = prevCart.find(
      (item) => item.id === id && item.size === newSize
    );

    if (existingSameItem) {
      //I'm merging quantities and removing original
      return prevCart
        .filter((_, idx) => idx !== itemIndex)
        .map((item) =>
          item.id === id && item.size === newSize
            ? { ...item, quantity: item.quantity + targetItem.quantity }
            : item
        );
    }

    // updating size
    return prevCart.map((item, idx) =>
      idx === itemIndex ? { ...item, size: newSize } : item
    );
  });
};





const removeFromCart = (id, size) => {
  setCart((prevCart) =>
    prevCart.filter((item) => !(item.id === id && item.size === size))
  );
};


  const clearCart = () => {
    setCart([]);
  };

  const contextValue = useMemo(
    () => ({ cart, currency, setCurrency, addToCart, changeSize, removeFromCart, clearCart, changeQuantity }),
    [cart],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
