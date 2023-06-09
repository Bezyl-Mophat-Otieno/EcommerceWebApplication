import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { cookie } from 'cookie';
import AddButton from "../components/AddButton"
import { useState } from "react";
import Add from "../components/Add"
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import dbConnect from "../utils/mongodb";
//TODO: Install axios

export default function Home({productList}) {
  const [close,setClose]=useState(true)
  const {admin} = useSelector(state=>state.admin)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Mombasa</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin !==null  && <AddButton admin={admin} setClose={setClose}/>
         
         }
      {!close && <Add setClose={setClose}/>}
      <ProductList productList={productList}/>
    </div>
  );
}
// Using the server side rendering engine in next js

export const getServerSideProps = async (context)=>{

  const  myCookie = context.req?.cookies || "";

  if(myCookie.token !== process.env.TOKEN){
  }
  try {
    const res = await axios.get("http://localhost:3000/api/products")

    return {
      props: {
        productList:res.data
      }
    }
  } catch (error) {
    console.log({msg:"Server side error"})
  }
}