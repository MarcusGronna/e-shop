import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

import CloseButton from "../ui/CloseButton";

// Tas in i NavBar
export default function Cart({ cartOpen, onClose }) {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/*----------------- Overlay ------------------*/}
          <motion.div
            className="fixed inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/*---------------------- Slide-over panel ----------------------*/}
          <motion.aside
            className="fixed right-0 top-0 h-full w-100 bg-white shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {/*------ Header -------*/}
            <div className="relative flex items-center justify-between px-4 py-3 border-b">
              <h2 className="text-lg font-bold">Varukorg</h2>
              <CloseButton onClose={onClose} />
            </div>

            {/*------- Produkter -------*/}
            <div className="flex-1 overflow-y-auto px-4">
              {cartItems.length === 0 ? (
                <p className="py-4 text-center text-gray-500">Varukorgen är tom</p>
              ) : (
                cartItems.map((item) => <CartItem key={item.id} item={item} />)
              )}
            </div>

            {/*------- Footer -------*/}
            <div className="border-t p-4">
              <p className="mb-4 text-right font-semibold">Totalt: {totalPrice.toFixed(2)} kr</p>
              <Button to="/checkout" text={"Till kassan"} onClick={onClose} />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
