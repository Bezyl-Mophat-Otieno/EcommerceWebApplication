import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { cookie } from 'cookie';
import AddButton from "../components/AddButton"
import { useState } from "react";
import Add from "../components/Add"
//TODO: Install axios

export default function Home({productList,admin}) {
  const [close,setClose]=useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin&&<AddButton setClose={setClose}/>}
      {!close && <Add setClose={setClose}/>}
      <ProductList productList={productList}/>
    </div>
  );
}
// Using the server side rendering engine in next js

export const getServerSideProps = async (context)=>{

  const  myCookie = context.req?.cookies || "";
  let admin = false;

  if(myCookie.token !== process.env.TOKEN){
    admin=true
  }
  try {
    const res = await axios.get("http://localhost:3000/api/products")


    return {
      props: {
        productList: await res.data,
        admin
      }
    }
  } catch (error) {
    console.log({msg:"Server side error"})
  }
}