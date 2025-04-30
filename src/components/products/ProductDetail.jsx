import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/MockProducts.json";
import { Button } from "@mui/material";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Laddar produkt...</p>;

  return (
    <>
      <h1 className="text-orange-500 text-5xl mb-1">{product.name}</h1>
      <p>{product.description}</p>
      <Button>Lägg till</Button>
    </>
  );
}
