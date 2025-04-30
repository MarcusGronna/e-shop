import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <p>Hej</p>
      <Link to="product-List">
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Produktlista
        </button>
      </Link>
    </>
  );
}

export default Home;
