import { createContext, useReducer } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        return state.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "INC":
      return state
        .map((p) => (p.id === action.payload ? { ...p, quantity: p.quantity + 1 } : p))
        .filter((p) => p.quantity > 0);

    case "DEC":
      return state
        .map((p) => (p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0);

    case "REMOVE":
      return state.filter((p) => p.id !== action.payload);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  // Hjälpfunktioner att importera där det behövs
  const add = (product) => dispatch({ type: "ADD", payload: product });
  const increase = (id) => dispatch({ type: "INC", payload: id });
  const decrease = (id) => dispatch({ type: "DEC", payload: id });
  const remove = (id) => dispatch({ type: "REMOVE", payload: id });
  const clear = () => dispatch({ type: "CLEAR" });

  //   Totalsumma
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Totala antalet artiklar
  // const totalItems = cartItems.reduce((qnt, item) => qnt * item.quantity, 0);

  //   Paketera allt i ett value-objekt
  const value = { cartItems, add, increase, decrease, remove, clear, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
