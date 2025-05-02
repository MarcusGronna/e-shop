import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import Cart from "../../components/cart/Cart";

export default function NavBar() {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false); // För mobilmeny

  return (
    // Sticky
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* -------------- Vänster: logga och titel -------------- */}
        <Link to="/" className="text-xl font-bold text-orange-600">
          M-Shop
        </Link>

        {/* ---------- Mitten: desktop-länkar -------------- */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="navLink">
            Hem
          </Link>
          <Link to="/product-list" className="navLink">
            Produkter
          </Link>
          <Link to="/checkout" className="navLink">
            Kassa
          </Link>
        </nav>

        {/* ------------ Höger: Kundvagn ---------------- */}
        <button
          onClick={() => {
            /** Här öppnas CartDrawer */
            setIsOpen(true);
          }}
          className="relative text-gray-700 hover:text-gray-900 cursor-pointer"
          aria-label="Varukorg"
        >
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          {cartItems.length > 0 && (
            <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white ">
              {cartItems.length}
            </span>
          )}
        </button>

        <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />

        {/* --------------- Hamburgare för mobil -------------------- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 cursor-pointer"
          aria-label="Meny"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
          <span></span>
        </button>
      </div>

      {/* -------------------- Mobil-dropdown --------------------- */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-2 bg-white px-4 shadow">
          <Link to="/" className="navlink" onClick={() => setIsOpen(false)}>
            Hem
          </Link>
          <Link to="/product-list" className="navlink" onClick={() => setIsOpen(false)}>
            Produkter
          </Link>
          <Link to="/checkout" className="navlink" onClick={() => setIsOpen(false)}>
            Kassa
          </Link>
        </nav>
      )}
    </header>
  );
}
