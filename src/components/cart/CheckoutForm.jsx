import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Fieldset from "../ui/Fieldset";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

export default function CheckoutForm() {
  return (
    <form>
      <Input />
      <Select />
      <Fieldset />
      <Textarea />
    </form>
  );
}
