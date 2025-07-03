import { createContext, useState, useContext } from 'react';

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [shippingMethod, setShippingMethod] = useState(null);
  const [contact, setContact] = useState('');
  const [shippingAddress, setShippingAddress] = useState(null);
  const [orderNumber, setOrderNumber] = useState(null); // For storing order confirmation
  
  // Generate a random order number (in a real app, this would come from your backend)
  const generateOrderNumber = () => {
    return `#${Math.floor(1000 + Math.random() * 9000)}`;
  };

  // Reset all checkout state
  const resetCheckout = () => {
    setShippingMethod(null);
    setContact('');
    setShippingAddress(null);
    setOrderNumber(null);
  };

  // Finalize the order (call this after successful payment)
  const completeOrder = () => {
    setOrderNumber(generateOrderNumber());
  };

  const value = {
    shippingMethod,
    setShippingMethod,
    contact,
    setContact,
    shippingAddress,
    setShippingAddress,
    orderNumber,
    resetCheckout,
    completeOrder
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};