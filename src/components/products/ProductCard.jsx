// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.li
      layoutId={`card-${product.id}`}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer list-none"
    >
      <img src={product.thumbnail} alt={product.title} />
      <h3 className="mt-2 font-bold">{product.title}</h3>
    </motion.li>
  );
}
