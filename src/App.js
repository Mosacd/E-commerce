import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Catalog from "./pages/catalog/catalog";
import ProductPage from "./pages/Product/product";
import Cart from "./pages/cart/cart";
import CheckoutPage from "./pages/checkout/checkout";
import CheckoutDetails from "./components/CheckoutPage/Details/CheckoutDetails";
import CheckoutShipping from "./components/CheckoutPage/CheckoutShipping/CheckoutShipping";
import CheckoutPayment from "./components/CheckoutPage/CheckoutPayment/CheckoutPayment";
import PaymentConfirmation from "./components/CheckoutPage/Confirmation/PaymentConfirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="men" />} />
        <Route path=":category" element={<Catalog />} />
        <Route path=":category/:productId" element={<ProductPage />} />
        <Route path="cart" element={<Cart/>} />
      </Route>
      
      <Route path="/checkout" element={<CheckoutPage />}>
        <Route index element={<Navigate to="details" replace />} />
        <Route path="details" element={<CheckoutDetails />} />
        <Route path="shipping" element={<CheckoutShipping />} />
        <Route path="payment" element={<CheckoutPayment />} />
        <Route path="confirmation" element={<PaymentConfirmation />} />
      </Route>
    </Routes>
  );
}

export default App;