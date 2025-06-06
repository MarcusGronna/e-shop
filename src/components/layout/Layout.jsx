import { useRef, useLayoutEffect, useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { HeaderContext } from "./HeaderContext";
import Footer from "./Footer";

export default function Layout() {
  const headerRef = useRef(null);
  const [forceTop, setForceTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //   Publicera höjden som CSS-variabel
  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      const h = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    updateHeaderHeight();
    const ro = new ResizeObserver(updateHeaderHeight);
    headerRef.current && ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  //   Spåra scrollposition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContext.Provider value={{ forceTop, setForceTop }}>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        {/* mt-4 när HÖGST UPP & ej modal. Annars 0 */}
        <NavBar
          ref={headerRef}
          className={`sticky top-0 z-20 bg-white shadow-md transition-all duration-200 ${
            !scrolled && !forceTop ? "mt-4" : "mt-0"
          }`}
        />
        <main className="flex-1 px-1.5">
          <Outlet />
        </main>
        <Footer className={"bottom-0"} />
      </div>
    </HeaderContext.Provider>
  );
}
