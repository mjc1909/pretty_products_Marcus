import {useParams} from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";
import PageHeader from "../../components/pageHeader/PageHeader";
import Products from "../../components/products/Products";




const ProductDetails = () => {
    
const { id } = useParams();
const {product} = useFetchById(id)

return(

<section>
      <PageHeader
       title={product?.title}
       headerImg={product?.images}
       />
       <div className="productDetails">
       <p className="description">
        {product?.description}</p>
        <p>{product?.price} kr</p>
        
        </div>
    </section>

);

};
export default ProductDetails