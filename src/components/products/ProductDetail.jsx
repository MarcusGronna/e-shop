// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getProduct } from "../../services/productService";
// import { Button } from "@mui/material";

export default function ProductDetail({ product }) {
  console.log(product);
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <img
        src={product.images[0] || product.thumbnail}
        alt={product.title}
        className="mb-4 w-full object-contain"
      />
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">Pris: {product.price} kr</p>
    </>
  );
}

// export default function ProductDetail({product}) {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   console.log(id);

//   useEffect(() => {
//     getProduct(id)
//       .then(setProduct)
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!product) return <p>Laddar produkt...</p>;

//   return (
//     <>
//       <h1 className="text-orange-500 text-5xl mb-1">{product.title}</h1>
//       <p>{product.description}</p>
//       <img src={product.images} alt={product.title} />
//       <Button>Lägg till</Button>
//     </>
//   );
// }
