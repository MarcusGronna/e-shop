import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const base = "hover:underline focus-visible:unerline";
const socialIcons = [
  { icon: faFacebookF, link: "https://facebook.com" },
  { icon: faInstagram, link: "https://instagram.com" },
  { icon: faTwitter, link: "https://twitter.com" },
];

const Footer = () => (
  <footer className="bg-gray-900 text-gray-100 pb-60 sm:pb-1">
    <div
      className="
    grid grid-cols-1 sm:grid-cols-3  
    mx-auto max-w-7xl px-6 py-10
    "
    >
      {/* Kontakt  */}
      <address className="not-italic space-y-2 ">
        <h2 className="font-semibold text-lg mb-1 flex justify-center sm:justify-start">
          Kontakta oss
        </h2>
        <p className="flex items-center gap-2 justify-center sm:justify-start">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Sollentuna, Sverige
        </p>
        <p className="flex items-center gap-2 justify-center sm:justify-start">
          <FontAwesomeIcon icon={faPhoneAlt} />
          +46&nbsp;730&nbsp;00&nbsp;00
        </p>
        <p className="flex items-center gap-2 sm:justify-start justify-center ">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="#" className="hover:underline">
            mailMe@email.com
          </a>
        </p>
      </address>

      {/* Snabblänkar */}
      <nav aria-label="Snabblänkar">
        <h2 className="mb-3 text-lg font-semibold">Snabblänkar</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/" title="Till startsidan" className={base}>
              Hem
            </Link>
          </li>
          <li>
            <Link to="/product-list" title="Bläddra bland produkter" className={base}>
              Produkter
            </Link>
          </li>
          <li>
            <Link to="/checkout" title="Gå till kassan" className={base}>
              Kassa
            </Link>
          </li>
          <li>
            <Link to="#" title="Läs köpvillkor" className={base}>
              Köpvillkor
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social + Copyright */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Följ oss</h2>
        <ul className="flex justify-around gap-4">
          {socialIcons.map(({ icon, link }) => (
            <li key={link}>
              <a
                href={link}
                className="grid h-9 w-9 place-items-center rounded-full bg-gray-800 transition hover:bg-amber-500 focus-visible:bg-amber-500"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MShop - alla rättigheter förbehållna.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
