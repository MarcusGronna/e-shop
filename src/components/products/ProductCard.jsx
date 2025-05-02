// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCallback } from "react";

const prefetched = new Set();

export default function ProductCard({ product, onClick }) {
  const prefetchLarge = useCallback(() => {
    if (prefetched.has(product.id)) return;

    const img = new Image();
    img.src = product.images?.[0] || product.thumbnail; // Stora bilden
    prefetched.add(product.id);
  }, [product]);

  return (
    <motion.li
      layoutId={`card-${product.id}`}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
      className="cursor-pointer list-none rounded-lg bg-white p-4 shadow transition duration-50"
      onPointerEnter={prefetchLarge} // Startar fetch vid hover
    >
      <img src={product.thumbnail} alt={product.title} className="m-auto" />
      <h3 className="mt-2 font-bold">{product.title}</h3>
    </motion.li>
  );
}
