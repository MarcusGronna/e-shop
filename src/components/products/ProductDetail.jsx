import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../../services/productService";
import { Button } from "@mui/material";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);

  useEffect(() => {
    getProduct(id)
      .then(setProduct)
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Laddar produkt...</p>;

  return (
    <>
      <h1 className="text-orange-500 text-5xl mb-1">{product.title}</h1>
      <p>{product.description}</p>
      <Button>Lägg till</Button>
    </>
  );
}
