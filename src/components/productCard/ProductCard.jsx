import { Link } from "react-router-dom"
import styles from './productCard.module.css'
import { useLocalStorage } from "@uidotdev/usehooks"
import {FcLike, FcDislike} from "react-icons/fc";

const ProductCard = ({product}) => {
const{favorites, setFavorites} = useLocalStorage("Favorites", [])
const isFavorite = Array.isArray(favorites) && favorites.includes(product.id)

const handleLike = () => {
    setFavorites((prevFavorites) => isFavorite ? prevFavorites.filter((fav) => fav !== product.id)
    : [...prevFavorites, product.id]
)
}

return(
    <figure className={styles.productCard}>
        <Link to={`/products/${product.id}`}>
        <img className={styles.productImg} src={product.thumbnail}/>
    </Link>
        <figcaption>
         <h2>{product.title}</h2>
         {isFavorite ? <FcDislike onclick={handleLike} size={30} /> : <FcLike onclick={handleLike} size={30} />}
         <p>{product?.price} kr</p>
        </figcaption>
    </figure>
)

}
export default ProductCard