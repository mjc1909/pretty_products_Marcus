import { useEffect, useState } from "react"


const useFetchById = (id) => {
  const [product, setProduct] = useState(null);

  const fetchProductById = async (id) => {
    try {
      const response = await fetch(`http://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching the product:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id]);

  return {product};
};

export default useFetchById;