import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CloseButton({ onClose }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      className="z-20 absolute top-2 right-3 text-xl p-1 text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-150"
      aria-label="Stäng"
    >
      <FontAwesomeIcon icon={faXmark} size="lg" />
    </button>
  );
}
