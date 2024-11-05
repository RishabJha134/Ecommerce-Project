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

export async function fetchProductsByFilters(filter, sort) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    console.log(categoryValues);
    if (categoryValues.length) {
      const lastCategoryValues = categoryValues[categoryValues.length - 1];
      console.log(lastCategoryValues);
      queryString = queryString + `${key}=${lastCategoryValues}&`;
    }
  }

  for (let key in sort) {
    queryString = queryString + `${key}=${sort[key]}&`;
  }

  try {
    console.log(queryString);
    const response = await axios.get(
      "http://localhost:3000/products?" + queryString
    );
    return { data: response.data };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error for further handling if needed
  }
}
// http://localhost:3000/products?category=smartphone

export async function fetchCategories() {
  try {
    console.log("Fetching categories");
    const response = await axios.get("http://localhost:3000/categories");
    return { data: response.data };
  } catch (err) {
    console.log(err);
  }
}

export async function fetchBrands() {
  try {
    console.log("Fetching brands");
    const response = await axios.get("http://localhost:3000/brands");
    return { data: response.data };
  } catch (err) {
    console.log(err);
  }
}
