import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";
//TODO: Install axios

export default function Home({productList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList productList={productList}/>
    </div>
  );
}
// Using the server side rendering engine in next js

export const getServerSideProps = async ()=>{

  try {
    const res = await axios.get("http://localhost:3000/api/products")


    return {
      props: {
        productList: await res.data
      }
    }
  } catch (error) {
    console.log({msg:"Server side error"})
  }
}