import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function DebugCartButton({ product }) {
  const { add, cartItems } = useContext(CartContext);

  return (
    <>
      <button onClick={() => add(product)}>Lägg till test-produkt</button>
      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
    </>
  );
}
