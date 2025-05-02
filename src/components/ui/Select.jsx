import React from "react";

export default function Select({
  label,
  id,
  name,
  options = [], // [{ value: 'SE', label: 'Sverige' }, ...]
  value,
  onChange,
  required = false,
  error = "",
}) {
  return (
    <div className="mb-4 ">
      <label htmlFor={id || name} className="block text-sm font-medium mb-1">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <select
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full p-2 border rounded focus:outline-none focus:ring cursor-pointer
            ${
              error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-orange-200"
            }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id || name}-error` : undefined}
      >
        <option value="" disabled>
          Välj...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id || name}-error`} className="text-sm text-red-600 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
