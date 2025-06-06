import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Fieldset from "../ui/Fieldset";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const { cartItems, totalPrice, clear } = useContext(CartContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    zip: "",
    city: "",
    comment: "",
    country: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldsToValidate = ["name", "email", "street", "zip", "city", "country"];

    const newErrors = {};

    fieldsToValidate.forEach((field) => {
      if (!data[field]?.trim()) {
        newErrors[field] = "Måste fyllas i";
      }
    });

    if (Object.keys(newErrors).length === 0) {
      clear();
      navigate("/confirmation", {
        state: {
          formData: data,
          cartItems,
          totalPrice,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto pb-10">
      <Fieldset legend="Kontaktuppgifter">
        <Input
          label="Fullständigt namn"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <Input
          label="E-postadress"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </Fieldset>

      <Fieldset legend="Leveransadress">
        <Input
          label="Gatuadress"
          name="street"
          value={data.street}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Postnummer" name="zip" value={data.zip} onChange={handleChange} required />
          <Input label="Ort" name="city" value={data.city} onChange={handleChange} required />
        </div>
        <Select
          label="Land"
          name="country"
          options={[
            { value: "SE", label: "Sverige" },
            { value: "NO", label: "Norge" },
            { value: "FI", label: "Finland" },
            { value: "TH", label: "Thailand" },
          ]}
          value={data.country}
          onChange={handleChange}
          required
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
