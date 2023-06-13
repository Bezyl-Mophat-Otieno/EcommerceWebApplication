import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";
import { reset } from "../redux/cartSlice";
import OrderDetails from "../components/OrderDetails"
import ButtonWrapper from "../components/ButtonWrapper";
import { useRouter } from "next/router";
import axios from "axios";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
  const [open , setOpen] = useState(false)
  const [cash, setCash] = useState(false);
  const {total,products} = useSelector(state=>state.cart)
  const currency = "USD";
  const dispatch = useDispatch()
  const router = useRouter()

  const createOrder = async (data)=>{
    try {

        const res = await axios.post("http://localhost:3000/api/orders",data)
        const id = await res.data._id

        res.status === 201 && router.push("/orders/"+ id)
        dispatch(reset());


        
    } catch (error) {
      console.log(error)
        
    }
}

    
  return (

    products.length === 0 ? (
      <div className={styles.alertContainer}>
      <div className={styles.alert}>
      <h2>Your cart is empty , Kindly make some orders to proceed ...</h2>
      </div>
      </div>
    ):(

      <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {products.map((product, index) => (

          <tr className={styles.tr} key={index}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={product.image}
                  fill
                  style={{objectFit:"cover",borderRadius:"50%"}}
                  alt=""
                />
              </div>
            </td>
            <td>
              <div className={styles.name}>{product.title}</div>
            </td>
            <td>
              <span className={styles.extras}>
              {
                product.extras.map(extra=>(
                <span key={extra._id}>{extra.addons}</span>
                ))
              }
              </span>
            </td>
            <td>
              <span className={styles.price}>${product.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>{product.price * product.quantity}</span>
            </td>
          </tr>
        ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${total}
          </div>
          {
            open ? (
              <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                "client-id":"test",
                  components: "buttons",
                  currency: "USD",
                }}
              >
                <ButtonWrapper createOrder={createOrder} currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
            ) : (
          <button onClick={()=>setOpen(true)} className={styles.button}>CHECKOUT NOW!</button>
            )
          }
         
        </div>
      </div>
      {cash && <OrderDetails  setCash={setCash} total={total} createOrder={createOrder} />}
    </div>

    )

  );
};

export default Cart;
