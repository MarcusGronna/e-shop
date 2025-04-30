import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  console.log(productList);

  useEffect(() => {
    getAllProducts().then(setProductList);
  }, []);

  return (
    <>
      <h1>ProductList</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <Link>
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                {product.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
