import Button from "../ui/Button";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail({ product }) {
  const { add } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <h2 className="sticky z-10 top-0 backdrop-blur font-bold text-center text-[clamp(1rem,4vw,1.5rem)] font-nav">
        {product.title}
      </h2>

      {/* Scroll-yta (bild och beskrivning) */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center gap-4 px-2">
        <img
          src={product.images[0] || product.thumbnail}
          alt={product.title}
          className=" 
        max-w-full object-contain 
        max-h-[32svh] md:max-h-[30svh]
      
        "
        />
        <p
          className={`
        text-center text-[clamp(0.875rem,2.8vw,1rem)] mt-2 
        ${expanded ? "" : "line-clamp-1"} font-body
        `}
        >
          {product.description}
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-grey-600 underline underline-offset-2 text-sm cursor-pointer"
        >
          {expanded ? "visa mindre" : "läs mer..."}
        </button>
      </div>

      {/* Anropar add(product) vid klick */}
      <div className="sticky bottom-0 z-10 bg-white/95 backdrop-blur pt-4">
        <p className="font-semibold text-[clamp(0.95rem,3vw,1.1rem)] mt-2">
          Pris: {product.price} kr
        </p>
        <Button className="w-full" text={"Lägg i varukorg"} onClick={() => add(product)} />
      </div>
    </div>
  );
}
