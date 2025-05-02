import Button from "../ui/Button";

export default function ProductDetail({ product }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <img
        src={product.images[0] || product.thumbnail}
        alt={product.title}
        className="mb-4 w-full object-contain "
      />
      <p>{product.description}</p>
      <p className="mt-2 font-semibold">Pris: {product.price} kr</p>
      <Button text={"Lägg i varukorg"} onClick={() => addToCart(product)} />
    </>
  );
}
