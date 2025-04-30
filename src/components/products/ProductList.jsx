import products from "../data/MockProducts.json";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

export default function ProductList() {
  return (
    <>
      <h1>ProductList</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt="{product.name}" />
          <br />
          <Link to={`/Product-Detail/${product.id}`}>Se produkt</Link>
        </div>
      ))}
    </>
  );
}
