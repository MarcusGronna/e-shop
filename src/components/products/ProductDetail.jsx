import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/productService";
import { Button } from "@mui/material";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);
  useEffect(() => {
    getAllProducts().then(setProduct);
    const foundProduct = product.find((p) => p.id === parseInt(id));
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
