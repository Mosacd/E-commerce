import { useNavigate } from "react-router-dom";
import ShippingLayout from '../LayoutCheckout/LayoutCheckout';
import ContactForm from './ContactForm';
import ShippingForm from './ShippingForm';
import { useCheckout } from "../../../context/checkout";
import { useState } from "react";

const CheckoutDetails = () => {
  const navigate = useNavigate();
  const { contact, setContact } = useCheckout();
  const [contactError, setContactError] = useState('');

  const validateContact = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{7,15}$/;

    if (!value.trim()) return "Contact is required";
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return "Enter a valid email or phone number";
    }
    return "";
  };

  const handleShippingSubmit = () => {
    const contactErrorMsg = validateContact(contact);
    
    if (contactErrorMsg) {
      setContactError(contactErrorMsg);
    } else {
      setContactError('');
      navigate('/checkout/shipping');
    }
  };

  return (
    <ShippingLayout>
      <ContactForm
        contact={contact}
        setContact={(value) => {
          setContact(value);
          if (contactError) setContactError('');
        }}
        error={contactError}
      />
      <ShippingForm
        onSubmit={handleShippingSubmit}
        onBack={() => navigate("/cart")}
      />
    </ShippingLayout>
  );
};

export default CheckoutDetails;