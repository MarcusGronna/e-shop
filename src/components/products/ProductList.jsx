import { HeaderContext } from "../layout/HeaderContext";
import { useEffect, useState, useContext } from "react";
import { getAllProducts } from "../../services/productService";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import CloseButton from "../ui/CloseButton";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const openProduct = (id) => {
    const found = productList.find((p) => p.id === id);
    setSelectedProduct(found);
  };
  const { setForceTop } = useContext(HeaderContext);

  // Stänger scroll + tvingar header
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      setForceTop(true); // header mt-0
    } else {
      document.body.style.overflow = "";
      setForceTop(false); // låter scroll-logiken styra
    }
  }, [selectedProduct, setForceTop]);

  useEffect(() => {
    getAllProducts().then(setProductList);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";
  }, [selectedProduct]);

  return (
    <>
      {/* Listar produktkort */}
      <div className="relative">
        <ul className="grid grid-cols-2 gap-4">
          {productList.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => openProduct(p.id)} />
          ))}
        </ul>
      </div>

      {/*------------------- Modal Overlay - Öppnar kort och visar detaljsidan ---------------------*/}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/*------- Overlay med blur -------*/}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/*------- Container för kort -------*/}
            <motion.div
              key="modal"
              style={{
                top: "var(--header-h)",
                height: "calc(100dvh - var(--header-h))",
              }}
              layoutId={`card-${selectedProduct.id}`}
              className="fixed inset-0 justify-center flex items-center pt-4 md:mt-4"
              onClick={() => setSelectedProduct(null)}
            >
              {/* Stor version av kortet */}
              <motion.div
                className="
                bg-white w-11/12 max-w-sm /* smalare på telefon */
                max-h-[calc(100dvh-var(--header-h)-4rem)] /* tar alltid hänsyn till headern  */
                min-h-[20rem]
                sm:w-[420px] md:w-[460px]
                overflow-y-auto  /* scrolla INSIDE kortet om det blir trångt */
                p-6 rounded-xl shadow-lg
                flex flex-col relative
                "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                onClick={(e) => e.stopPropagation()} /* Hindra stäng-klick på kortet */
              >
                <ProductDetail product={selectedProduct} />
                <CloseButton onClose={() => setSelectedProduct(null)} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
