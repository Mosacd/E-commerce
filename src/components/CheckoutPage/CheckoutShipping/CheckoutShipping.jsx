import ShippingLayout from '../LayoutCheckout/LayoutCheckout';
import ShippingMethod from './ShippingMethod';

const CheckoutShipping = ({ onBack, onNext }) => {
  return (
    <ShippingLayout currentStep="shipping">
      <ShippingMethod onBack={onBack} onNext={onNext} />
    </ShippingLayout>
  );
};

export default CheckoutShipping;