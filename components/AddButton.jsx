import styles from "../styles/Add.module.css";
import Link from "next/link";

const AddButton = ({ setClose , admin  }) => {
  return (
    <div  className={styles.mainAddButton}>
     { admin ? <div onClick={() => setClose(false)}> Add New Product </div> :   <Link href={"/product"}> Order Now </Link>  }
    </div>
  );
};

export default AddButton;