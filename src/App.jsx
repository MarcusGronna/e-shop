import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import Cart from "./components/cart/Cart";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Product-List" element={<ProductList />} />
        <Route path="/Product-Detail/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
