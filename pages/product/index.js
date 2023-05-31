import styles from '../../styles/ProductList.module.css'
import ProductCard from '../../components/ProductCard';
import axios from 'axios';
import dbConnect from '../../utils/mongodb';

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


export const getServerSideProps = async ()=>{

    try {
      const res = await axios.get("http://localhost:3000/api/products")
  
      return {
        props: {
          productList: await res.data
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }
