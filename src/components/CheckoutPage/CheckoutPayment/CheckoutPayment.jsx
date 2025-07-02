import LayoutCheckout from '../LayoutCheckout/LayoutCheckout';
import PaymentMethod from './PaymentMethod';

const CheckoutPayment = ({ onBack, onNext }) => {
  return (
    <LayoutCheckout currentStep="payment">
      <PaymentMethod onBack={onBack} onNext={onNext} />
    </LayoutCheckout>
  );
};

export default CheckoutPayment;
