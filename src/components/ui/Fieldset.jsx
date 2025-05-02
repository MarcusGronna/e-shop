import React from "react";

export default function Fieldset({ legend, children }) {
  return (
    <fieldset className="mb-6 p-4 bg-gray-50 rounded">
      <legend className="text-lg font-semibold mb-4">{legend}</legend>
      {children}
    </fieldset>
  );
}
