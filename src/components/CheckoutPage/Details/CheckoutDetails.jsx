import ShippingLayout from '../LayoutCheckout/LayoutCheckout';
import ContactForm from './ContactForm';
import ShippingForm from './ShippingForm';

const CheckoutDetails = ({ onNext }) => {
  return (
    <ShippingLayout currentStep="details">
      <ContactForm />
      <ShippingForm onNext={onNext} />
    </ShippingLayout>
  );
};

export default CheckoutDetails;
