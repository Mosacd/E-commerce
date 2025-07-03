import { useState } from 'react';
import ShippingLayout from '../LayoutCheckout/LayoutCheckout';
import ContactForm from './ContactForm';
import ShippingForm from './ShippingForm';

const CheckoutDetails = ({ onNext }) => {
  const [contact, setContact] = useState('');
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

  return (
    <ShippingLayout currentStep="details">
      <ContactForm
        contact={contact}
        setContact={setContact}
        error={contactError}
      />
      <ShippingForm
        contact={contact}
        validateContact={validateContact}
        setContactError={setContactError}
        onNext={onNext}
      />
    </ShippingLayout>
  );
};

export default CheckoutDetails;
