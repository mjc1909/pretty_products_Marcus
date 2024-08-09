import useFetch from "../hooks/useFetch";
import PageHeader from "../components/pageHeader/PageHeader";
import useFetchById from "../hooks/useFetchById";
import Button from "../components/button/Button";
import { useState } from "react";
import styles from "../components/button/button.module.css";
import ProductCard from "../components/productCard/ProductCard";
import useFetchData from "../hooks/useFetchData";


const Products = () => {
  const { products, furniture, beauty, groceries } = useFetch();
  const { product } = useFetchById(20);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: products,
    Furniture: furniture,
    Beauty: beauty,
    Groceries: groceries,
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProducts = filters[activeFilter] || products;

  return (
    <section>
      
      <PageHeader title='Produkter' headerImg={product?.images} />
      <div className={styles.filterButtons}>
        <Button
          title='All'
          className={activeFilter === "All" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("All")}
        />
        <Button
          title='Furniture'
          className={activeFilter === "Furniture" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("Furniture")}
        />
        <Button
          title='Beauty'
          className={activeFilter === "Beauty" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("Beauty")}
        />
        <Button
          title='Groceries'
          className={activeFilter === "Groceries" ? styles.buttonActive : ""}
          onClick={() => handleFilterChange("Groceries")}
        />
      </div>

      <div className='products'>
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
