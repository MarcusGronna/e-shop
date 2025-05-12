import heroBg from "../../assets/heroBg.png";
import { Link } from "react-router-dom";

const Hero = () => (
  <section
    className="
    flex items-center justify-center relative 
    w-full h-[45vh] md:h-[55vh] 
    bg-cover bg-center 
    isolate
    "
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="text-center space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow ">
        Upptäck vårens favoriter!
      </h1>
      <Link
        to="/product-list"
        className="
      relative group inline-flex items-center justify-center
      px-8 py-3 md:px-9 md:py-4
      font-semibold tracking-wide
      bg-gradient-to-r from-amber-500 via-pink-500 to-rose-500
      rounded-xl overflow-hidden
      ring-2 ring-white/30 ring-offset-2 ring-offset-transparent
      backdrop-blur-sm bg-white/20
      text-white shadow-lg
      transition-transform duration-300 ease-out
      hover:scale-105 hover:ring-offset-4
      focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300
       "
      >
        <span
          className="
        absolute inset-0 before:absolute before:inset-0
        before:bg-white/60 before:blur-xl
        before:translate-x-[-100%]
        before:skew-x-[-20deg]
        before:group-hover:translate-x-[200%]
        before:transition-transform before:duration-700
        "
        />
        <span className="relative z-10">Shoppa&nbsp;nu!</span>
      </Link>
    </div>
  </section>
);

export default Hero;
