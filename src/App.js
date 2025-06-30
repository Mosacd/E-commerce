import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Catalog from "./pages/catalog/catalog";
import ProductPage from "./pages/Product/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="men" />} />
        <Route path=":category" element={<Catalog />} />
        <Route path=":category/:productId" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
