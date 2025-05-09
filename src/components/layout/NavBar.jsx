import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import Cart from "../../components/cart/Cart";
import logo from "../../assets/logo.svg";

export default function NavBar() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false); // För mobilmeny
  const [cartOpen, setCartOpen] = useState(false); // För kundkorg

  return (
    // Sticky
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* -------------- Vänster: logga och titel -------------- */}
        <Link to="/" className="text-xl font-bold text-orange-600">
          <img src={logo} alt="M-Shop logo" />
        </Link>

        {/* ---------- Mitten: desktop-länkar (dolda under md) -------------- */}
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

        <div className="flex items-center gap-7">
          {/* ------------ Höger: Kundvagn ---------------- */}
          <button
            onClick={() => {
              /** Här öppnas CartDrawer */
              setCartOpen(true);
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

          {/* --------------- Hamburgare för mobil -------------------- */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900 cursor-pointer"
            aria-label="Meny"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
            <span></span>
          </button>
        </div>
      </div>
      {/* -------------------- Mobil-dropdown --------------------- */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-2 bg-white px-4 shadow">
          <Link to="/" className="navlink" onClick={() => setMenuOpen(false)}>
            Hem
          </Link>
          <Link to="/product-list" className="navlink" onClick={() => setMenuOpen(false)}>
            Produkter
          </Link>
          <Link to="/checkout" className="navlink mb-1" onClick={() => setMenuOpen(false)}>
            Kassa
          </Link>
        </nav>
      )}
      <Cart cartOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
