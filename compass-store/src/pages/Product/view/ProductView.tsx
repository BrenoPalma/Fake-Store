import { useProductController } from "../controller/useProducutController";
import { ProductInfo } from "../components/ProductInfo";
import { ProductCarousel } from "../components/ProductCarousel";

const ProductView = () => {
    const {product,loading,error} = useProductController();
    
    return(
        <div>
            {loading? <p>Carregando...</p>:
            <div>
            <ProductInfo product={product}></ProductInfo>
            {product && <ProductCarousel category={product.category} />}
            </div>
            }   
        </div>
    )
}

export default ProductView;