import { Link } from "react-router-dom";

export default function Button({ text, to, onClick, type = "button" }) {
  const base =
    "inline-block m-2 p-3 text-base font-medium text-white bg-gray-500 hover:bg-gray-400 rounded cursor-pointer";

  if (to) {
    return (
      <Link to={to} className={base} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base} type={type}>
      {text}
    </button>
  );
}
