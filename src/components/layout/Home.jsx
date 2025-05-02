import { Link } from "react-router-dom";
import Button from "../ui/Button";

function Home() {
  return (
    <>
      <div className="bg-amber-100 w-full h-full">
        <p>Hej</p>

        <Button
          to="product-List"
          text={"Gå till produkter"}
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        />
      </div>
    </>
  );
}

export default Home;
