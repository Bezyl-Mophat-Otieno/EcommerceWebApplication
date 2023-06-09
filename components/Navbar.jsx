import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { adminLogOut  } from "../redux/adminSlice";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { useRouter } from "next/router";

const Navbar = ({loggedIn}) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {admin}  = useSelector(state=>state.admin)
  // const {quantity}  = useSelector(state=>state.quantity)
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
        <Link href={"/product/all"}>
          <li className={styles.listItem}>PRODUCTS</li>
        </Link>
       
       {

        !admin ?   <Link href={"/admin"}>
                    <li className={styles.listItem}>ADMIN </li>
                  </Link> : <Link href={"/admin"}>
                    <li className={styles.listItem}>ADMIN DASHBOARD</li>
                  </Link> 

       }
       <Link href={'/cart'} passHref>

<div className={styles.item}>
  <div className={styles.cart}>
    <Image src="/img/cart.png" alt="" width={30} height={30} />
    <div className={styles.counter}>{0}</div>
  </div>
</div>
</Link>
          </ul>
      </div>
     { admin && <div className={styles.logout} onClick={()=>handleLogout(admin)}>Log-out</div>   }  
    </div> 
  );
};

export default Navbar;




