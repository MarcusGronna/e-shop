import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getAllProducts().then(setProductList);
  }, []);

  return (
    <>
      <h1>ProductList</h1>

      {/* Listar produktkort */}
      <ul className="grid grid-cols-2 gap-4">
        {productList.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => setSelectedProduct(p)} />
        ))}
      </ul>

      {/* Modal Overlay - Öppnar kort och visar detaljsidan */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Overlay med blur */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Container för kort */}
            <motion.div
              key="modal"
              layoutId={`card-${selectedProduct.id}`}
              className="fixed inset-0 justify-center flex items-center"
              onClick={() => setSelectedProduct(null)}
            >
              {/* Stor version av kortet */}
              <motion.div
                className="bg-white w-full max-w-md p-6 rounded-lg relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                onClick={(e) => e.stopPropagation()} /* Hindra stäng-klick */
              >
                <button
                  className="absolute top-2 right-3 text-xl cursor-pointer"
                  onClick={() => setSelectedProduct(null)}
                >
                  X
                </button>

                <ProductDetail product={selectedProduct} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
