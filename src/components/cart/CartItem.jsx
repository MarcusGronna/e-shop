import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ item }) {
  const { increase, decrease, remove } = useContext(CartContext);

  return (
    <div className="flex items-center gap-4 py-3 border-b last:border-b-0">
      {/* Thumbnail */}
      <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded" />
      {/* Titel och Pris */}
      <div className="flex-1">
        <p className="font-medium text-sm">{item.title}</p>
        <p className="text-xs text-gray-500">{item.price} kr/st</p>
      </div>
      {/* Kvantitetskontroller  */}
      <div>
        <button
          onClick={() => decrease(item.id)}
          className="p-1 rounded hover:bg-gray-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faMinus} size="sm" />
        </button>
      </div>
      <span className="px-1">{item.quantity}</span>
      <button
        onClick={() => increase(item.id)}
        className="p-1 rounded hover:bg-gray-200 cursor-pointer"
      >
        <FontAwesomeIcon icon={faPlus} size="sm" />
      </button>
      {/* Rad-summa & ta bort */}
      <div className="flex flex-col items-end gap-1">
        <p className="text-sm font-semibold">{item.price * item.quantity} kr</p>
        <button
          onClick={() => remove(item.id)}
          className="text-gray-400 hover:text-red-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>{" "}
    </div>
  );
}
