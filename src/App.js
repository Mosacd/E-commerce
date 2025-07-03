import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Catalog from "./pages/catalog/catalog";
import ProductPage from "./pages/Product/product";
import Cart from "./pages/cart/cart";
import CheckoutPage from "./pages/checkout/checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="men" />} />
        <Route path=":category" element={<Catalog />} />
        <Route path=":category/:productId" element={<ProductPage />} />
        <Route path="cart" element={<Cart/>} />
      </Route>
      <Route path="/checkout" element={<CheckoutPage/>} />
    </Routes>
  );
}

export default App;
