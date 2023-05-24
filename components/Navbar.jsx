import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = ({admin}) => {

  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+254 702 715 906</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href='/'passHref>
          <li className={styles.listItem}>Homepage</li>
        </Link>
        <Link href={"/product"}>
          <li className={styles.listItem}>Products</li>
        </Link>
        <Link href={"/cart"}>
          <li className={styles.listItem}>My Cart</li>
        </Link>
       {

        !admin &&  <Link href={"/admin"}>
                    <li className={styles.listItem}>Admin</li>
                  </Link>

       }
          <Image src="/img/logo.png" alt="" width={160} height={69} />
          </ul>
      </div>
      <Link href={'/cart'} passHref>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width={30} height={30} />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div> 
  );
};

export default Navbar;

export const getServerSideProps =  (context)=>{

  const  myCookie = context.req?.cookies || "";
  let admin = true;

  if(myCookie.token !== process.env.TOKEN){
    admin=false
  
    return {
      props: {
        admin
      }
    }
  }

}
