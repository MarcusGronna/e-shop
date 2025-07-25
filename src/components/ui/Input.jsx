export default function Input({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id || name} className="block text-sm font-medium mb-1">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full p-2 border rounded focus:outline-none focus:ring ${
          error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-orange-200"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id || name}-error` : undefined}
      />

      {error && (
        <p id={`${id || name}-error`} className="text-sm text-red-600 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
