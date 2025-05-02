import React from "react";

export default function Fieldset({ legend, children }) {
  return (
    <fieldset className="relative my-6 p-6 bg-gray-50 border border-gray-200 rounded">
      <legend className="absolute top-0 left-4 p-2 text-lg font-semibold text-gray-700 bg-gray-50">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}
