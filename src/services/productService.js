const BASE_URL = "https://dummyjson.com/products";

// Asynkron funktion som hämtar produkter från dummyJson och returnerar produkterna som Json
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export async function getAllProducts() {
  const url = BASE_URL;
  //   Retur av data
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // Konverterat data till json
    const json = await response.json();

    return json.products;
  } catch (error) {
    console.error(error.message);
  }
}
