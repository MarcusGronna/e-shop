import { Link } from "react-router-dom";
import { forwardRef, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import Cart from "../../components/cart/Cart";
import logo from "../../assets/logo.svg";

const NavBar = forwardRef(({ className }, ref) => {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false); // För mobilmeny
  const [cartOpen, setCartOpen] = useState(false); // För kundkorg

  // Summera antal artiklar
  const totalItems = cartItems.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    // Sticky - Från props/className > Layout.jsx
    <header ref={ref} className={className}>
      {/* Wrapper för att kunna dela in navbar i columner. Främst för att få länkarna centrerade */}
      <div className="mx-auto grid grid-cols-3 max-w-7xl items-center px-4 py-2 md:py-3">
        {/* -------------- Vänster: logga och titel -------------- */}
        <Link to="/" className="text-xl font-bold text-orange-600 justify-self-start">
          <img src={logo} alt="M-Shop logo" />
        </Link>

        {/* ---------- Mitten: desktop-länkar (dolda under md) -------------- */}
        <nav className="hidden md:flex justify-self-center gap-8 font-nav">
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

        {/* --------------- Hamburgare för mobil - visa bara < md -------------------- */}
        <button
          // Toggle för meny öppen/stängd
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 cursor-pointer justify-self-center"
          aria-label="Meny"
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>

        {/* Wrapper för att kunna lägga röd counter på kundvagn med absolut positionering */}
        <div className=" pr-3 justify-self-end">
          {/* ------------ Höger: Kundvagn ---------------- */}
          <button
            onClick={() => {
              /** Här öppnas CartDrawer */
              setCartOpen(true);
            }}
            className="relative text-gray-700 hover:text-gray-900 cursor-pointer"
            aria-label="Varukorg"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="xl" />
            {cartItems.length > 0 && (
              // Röd counter
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white ">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
      {/* -------------------- Mobil-dropdown --------------------- */}
      {/* Om den är öppen visas länkar och vid onClick() på länk stängs menyn */}
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
      {/* onClose() för toggle för kundkorg öppen/stängd */}
      <Cart cartOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
});

export default NavBar;
