import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Fieldset from "../ui/Fieldset";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

export default function CheckoutForm({ onSubmit }) {
  const { cartItems, totalPrice } = useContext(CartContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    zip: "",
    city: "",
    comment: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}[("name", "email", "street", "zip", "city", "country")].forEach((f) => {
      if (!data[f]) newErrors[f] = "Måste fyllas i";
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <Fieldset legend="Kontaktuppgifter">
        <Input
          label="Fullständigt namn"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          error={errors.name}
        />
        <Input
          label="E-postadress"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
      </Fieldset>

      <Fieldset legend="Leveransadress">
        <Input
          label="Gatuadress"
          name="street"
          value={data.street}
          onChange={handleChange}
          required
          error={errors.street}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Postnummer"
            name="zip"
            value={data.zip}
            onChange={handleChange}
            required
            error={errors.zip}
          />
          <Input
            label="Ort"
            name="city"
            value={data.city}
            onChange={handleChange}
            required
            error={errors.city}
          />
        </div>
        <Select
          label="Land"
          name="country"
          options={[
            { value: "SE", label: "Sverige" },
            { value: "NO", label: "Norge" },
            { value: "FI", label: "Finland" },
          ]}
          value={data.country}
          onChange={handleChange}
          required
          error={errors.country}
        />
      </Fieldset>

      <Fieldset legend="Övrig information">
        <Textarea
          label="Kommentar till beställningen"
          name="comment"
          value={data.comment}
          onChange={handleChange}
          placeholder="Kommentar ..."
        />
      </Fieldset>
      <p className="text-right mg-4 font-semibold">Totalt att betala: {totalPrice.toFixed(2)} kr</p>
      <Button text="Slutför beställning" type="submit" />
    </form>
  );
}
