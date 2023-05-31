import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { adminLogOut  } from "../redux/adminSlice";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { useRouter } from "next/router";

const Navbar = ({admin}) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const loginStatus  = useSelector(state=>state.auth.admin)
  const quantity = useSelector(state=>state.cart.quantity)
  const handleLogout  = async()=>{
    await axios.get('/api/logout')
    dispatch(adminLogOut())
    router.push('/')
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
  
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href={"/"}>
        <Image src="/img/logo.png" alt="" width={160} height={69} />
        </Link>
        <Link href='/'passHref>
          <li className={styles.listItem}> HOME</li>
        </Link>
        <Link href={"/product"}>
          <li className={styles.listItem}>PRODUCTS</li>
        </Link>
       
       {

        !loginStatus &&  <Link href={"/admin"}>
                    <li className={styles.listItem}>ADMIN</li>
                  </Link>

       }
       <Link href={'/cart'} passHref>

<div className={styles.item}>
  <div className={styles.cart}>
    <Image src="/img/cart.png" alt="" width={30} height={30} />
    <div className={styles.counter}>{quantity}</div>
  </div>
</div>
</Link>
          </ul>
      </div>
     { loginStatus && <div className={styles.logout} onClick={()=>handleLogout(admin)}>Log-out</div>   }  
    </div> 
  );
};

export default Navbar;




