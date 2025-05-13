import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-100">
    <div
      className="
    grid grid-cols-1 sm:grid-cols-3  
    mx-auto max-w-7xl px-6 py-10
    "
    >
      {/* Kontakt  */}
      <adress className="not-italic space-y-2">
        <h2 className="font-semibold text-lg mb-1">Kontakta oss</h2>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Sollentuna, Sverige
        </p>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhoneAlt} />
          +46&nbsp;730&nbsp;00&nbsp;00
        </p>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="#" className="hover:underline">
            mailMe@email.com
          </a>
        </p>
      </adress>

      {/* Snabblänkar */}
      <nav className="border-2">
        <h2>Snabblänkar</h2>
        <ul>
          <li>Hem</li>
          <li>Produkter</li>
          <li>Kassa</li>
          <li>Köpvilkor</li>
        </ul>
      </nav>

      {/* Social + Copyright */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Följ oss</h2>
        <ul className="flex gap-4">
          {[
            { icon: faFacebookF, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faTwitter, link: "#" },
          ].map(({ icon, link }) => (
            <li key={link}>
              <a href={link} className="">
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MShop. Alla rättiheter förbehållna.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
