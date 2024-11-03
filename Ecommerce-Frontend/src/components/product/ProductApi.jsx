import axios from "axios";

export async function fetchAllProducts() {
  try {
    const response = await axios.get("http://localhost:3000/products");
    return { data: response.data };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error for further handling if needed
  }
}

export async function fetchProductsByFilters(filter) {
  // filter = {"category":"smartphone"};
  console.log(filter);
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  try {
    console.log(queryString);
    const response = await axios.get(
      "http://localhost:3000/products?"+queryString
    );
    return { data: response.data };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error for further handling if needed
  }
}
// http://localhost:3000/products?category=smartphone
