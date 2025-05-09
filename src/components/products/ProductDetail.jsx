import Button from "../ui/Button";
import DebugCartButton from "../ui/DebugCartButton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail({ product }) {
  const { add } = useContext(CartContext);

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <img
        src={product.images[0] || product.thumbnail}
        alt={product.title}
        className="h-auto w-full object-contain max-h-[50vh]"
      />
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">Pris: {product.price} kr</p>

      {/* Anropar add(product) vid klick */}
      <Button text={"Lägg i varukorg"} onClick={() => add(product)} />
      {/* <DebugCartButton product={product} /> */}
    </div>
  );
}
