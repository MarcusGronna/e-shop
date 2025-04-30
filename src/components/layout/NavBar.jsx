import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-4 justify-end m-10">
        <li>
          <Link to="/Product-List">ProductList</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
