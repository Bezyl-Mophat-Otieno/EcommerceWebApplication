import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/cartSlice"; 

const Product = ({product}) => {
  const [size, setSize] = useState(0);
  const [price , setPrice]  = useState(product.prices[0]);
  const [extras , setExtras] = useState([])
  const [quantity , setQuantity] = useState(0)
const changePrice = (number) => {

  setPrice(number + price)

}

 const  handleChange = (e,option) =>{
  const checked = e.target.checked

  if(checked){
    changePrice(option.price)
    setExtras(prev=>[...prev,option])
  }else{
    changePrice(-option.price)
    setExtras(prev=>[...prev,extras.filter(extra=>extra.id !==option._id)])
  }

}
const dispatch = useDispatch()

const handleClick = (e,product)=>{
  e.preventDefault()
  dispatch(addProducts({...product,price,extras,quantity}));
  console.log({...product,price,extras,quantity})
}

 

 const handleSize =  (sizeIndex)=>{
  const difference = product.prices[sizeIndex] - product.prices[size]
  setSize(sizeIndex)
  changePrice(difference)

 }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.image}  style={{objectfit:"contain",borderRadius:"50%"} } width={500} height={500} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>

        {
          product.extraOptions.map((option)=>(

            <div className={styles.option} key={option._id}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
              onChange={(e)=>handleChange(e,option)}
            />
            <label htmlFor="double">{option.addons}</label>
          </div>

          ))
        }
        </div>
        <div className={styles.add}>
            <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
            <button  onClick={(e)=>handleClick(e,product)} className={styles.button}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({params}) => {

  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)

  return {
    props:{
      product:await res.data
    }
  }


}
