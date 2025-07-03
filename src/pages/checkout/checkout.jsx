import { useState } from "react";

import CheckoutDetails from "../../components/CheckoutPage/Details/CheckoutDetails";
import CheckoutShipping from "../../components/CheckoutPage/CheckoutShipping/CheckoutShipping";
import CheckoutPayment from "../../components/CheckoutPage/CheckoutPayment/CheckoutPayment";
import PaymentConfirmation from "../../components/CheckoutPage/Confirmation/PaymentConfirmation";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState("details");

  const goTo = (step) => setCurrentStep(step);
  const handlePaymentComplete = () => setCurrentStep("confirmation");

  const renderStep = () => {
    switch (currentStep) {
      case "details":
        return <CheckoutDetails onNext={() => goTo("shipping")} />;
      case "shipping":
        return <CheckoutShipping onBack={() => goTo("details")} onNext={() => goTo("payment")} />;
      case "payment":
        return <CheckoutPayment onBack={() => goTo("shipping")} onNext={handlePaymentComplete} />;
      case "confirmation":
        return <PaymentConfirmation />;
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
};

export default CheckoutPage;
