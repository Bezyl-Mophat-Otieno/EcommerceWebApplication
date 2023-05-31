import Image from "next/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({product}) => {
  return (
    <div className={styles.container}>
    <Link href={`/product/${product._id}`} passHref>
      <Image src={product.image} alt="" style={{borderRadius:"10px"}} width={300} height={300} />
    </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}><span style={{color:"black" , fontSize:"30px" , fontWeight:"lighter"}}>Ksh.</span>{product.prices[0]}</span>
      <p className={styles.desc}>
      {
        product.desc
      }
      </p>
    </div>
  );
};

export default ProductCard;
