import styles from "../styles/ProductList.module.css";
import Product from '../pages/product/[id]';
import ProductCard from "./ProductCard";

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>

      <div className={styles.wrapper}>

      {
        productList.map((product) => (
          <ProductCard product={product} key={product._id}/>
                   
        ))
      }

      </div>
    </div>
  );
};

export default ProductList;
