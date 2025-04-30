import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
import NavBar from "./components/layout/NavBar";
import Home from "./components/layout/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
