import Button from "../ui/Button";

function Home() {
  return (
    <>
      <div className="bg-amber-100 w-full h-full">
        <p>Hej</p>

        <Button to="/product-list" text={"Gå till produkter"} />
      </div>
    </>
  );
}

export default Home;
