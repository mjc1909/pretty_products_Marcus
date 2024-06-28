import { useLocalStorage } from "@uidotdev/usehooks"
import useFetch from "../../hooks/useFetch"
import ProductCard from "../../components/productCard/ProductCard"


const MyFavorites = () => {
    const { products } = useFetch();
    const { favorites } = useLocalStorage("Favorites", []);
    
    // Ensure favorites is defined and is an array
    if (!Array.isArray(favorites)) {
        console.error('Favorites is not an array or undefined:', favorites);
        return null;
    }
    
    // Ensure recipes is defined and is an array
    if (!Array.isArray(products)) {
        console.error('Products is not an array or undefined:', products);
        return null;
    }

    const favoriteProducts = products.filter((product) => favorites.includes(product.id));
  
    return (
      <section className="products">
        {favoriteProducts.map((product) => (
          <ProductCard isFavorite={true} key={product.id} product={product} />
        ))}
      </section>
    );
};

export default MyFavorites;