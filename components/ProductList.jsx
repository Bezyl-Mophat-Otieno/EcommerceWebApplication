import styles from "../styles/ProductList.module.css";
import Product from '../pages/product/[id]';
import ProductCard from "./ProductCard";

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>QUALITY DISHES IN TOWN</h1>
      <p className={styles.desc} >
      { "Food for the soul , test the difference..."}
      </p>
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
