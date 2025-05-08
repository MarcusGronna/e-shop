import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function OrderConfirmation() {
  const { state } = useLocation();
  const { clear } = useContext(CartContext);
  const { formData, cartItems, totalPrice } = state || {};

  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!formData || !cartItems) {
    return (
      <p className="mt-4">
        Ingen orderdata hittad. <Link to="/">Tillbaka till startsidan</Link>
      </p>
    );
  }

  return (
    <div className="max-w-md mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header med ikon */}
      <div className="bg-green-50 p-6 flex items-center gap-4 ">
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-4-xl" />
        <div>
          <h1 className="text-2xl font-bold text-green-800">Tack för din beställning!</h1>
          <p className="mb-6 text-gray-700">
            Hej <span className="font-medium">{formData.name}</span>, din order är mottagen.
          </p>
        </div>
      </div>

      {/* Innehåll */}
      <div className="p-6 space-y-8">
        {/* Sammanfattning */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Sammanfattning</h2>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between py-3">
                <div>
                  <img src={item.thumbnail} alt={item.title} className="w-12" />
                </div>
                <p className="font-medium">
                  {item.title} ({item.quantity} st)
                </p>
                <p className="font-semibold">{(item.price * item.quantity).toFixed(2)} kr</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-right text-lg font-semibold mb-6">
            Totalt: {totalPrice.toFixed(2)} kr
          </p>
        </section>

        {/* Leveransuppgifter */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Leveransadress</h2>
          <div className="text-gray-700 space-y-1">
            <p>
              {formData.street}
              <br />
              {formData.zip} {formData.city}
              <br />
              {formData.country}
            </p>
          </div>
        </section>
      </div>

      {/* Footer-knapp */}
      <div className="bg-gray-50 p-6 text-center">
        <Button to="/" text={"Tillbaka till startsidan"} />
      </div>
    </div>
  );
}
