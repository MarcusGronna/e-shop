// import { useParams } from "react-router-dom";

const BASE_URL = "https://dummyjson.com/products";

// Asynkron funktion som hämtar produkter från dummyJson och returnerar produkterna som Json
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export async function getAllProducts() {
  const url = BASE_URL;
  //   Retur av hela listan av produkter
  try {
    // Hämtning av data
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // Konverterat data till json
    const json = await response.json();

    // Returnerar produkter som en lista av objekt
    return json.products;
  } catch (error) {
    console.error(error.message);
  }
}

// Hämtar enskilda produkter baserat på ID
export async function getProduct(id) {
  const url = BASE_URL;
  // const {id} = useParams()
  // Retur av product
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      throw new Error(`Hämtning misslyckades (${response.status})`);
    }
    const product = await response.json();
    return product; // Returnerar produktobjekt
  } catch (error) {
    console.error("getProduct", error.message);
    throw error;
  }
}
