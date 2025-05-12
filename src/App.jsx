import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
// import NavBar from "./components/layout/NavBar";
import Home from "./components/layout/Home";
import Checkout from "./components/checkout/Checkout";
import OrderConfirmation from "./components/checkout/OrderConfirmation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
