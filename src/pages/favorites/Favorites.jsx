import ProductCard from "../../components/productCard/ProductCard";
import useFetch from "../../hooks/useFetch";


const Favorites = () => {
  const { rating } = useFetch();

  return (
    <section className='products'>
      {rating.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Favorites;