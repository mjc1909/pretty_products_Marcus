import { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  let furniture = products.filter((p) => p.category.includes("furniture"));
  let beauty = products.filter((p) => p.category.includes("beauty"));
  let groceries = products.filter((p) => p.category.includes("groceries"));
  let rating = products.filter((p) => p.rating > 4.8);

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, rating, beauty, furniture, groceries };
};

export default useFetch;
