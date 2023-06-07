'use client'

import Image from 'next/image'
import styles from '../styles/Featured.module.css'
import { useState } from 'react'
import React from 'react'


function Featured() {
    const [index, setIndex] = useState(0);

    const images = [
      "/img/image11.jpg",
      "/img/dish4.jpg",
      "/img/dish6.jpg",
      "/img/dish7.jpg",
      "/img/dish8.jpg",
      "/img/dish1.jpg",
      "/img/dish1.jpg",
      "/img/dish1.jpg",
      "/img/dish1.jpg",
      "/img/dish1.jpg",
      "/img/dish1.jpg",
      "/img/dish9.jpg",
    
      
    ];

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 15)
        }
        if(direction==="r"){
            setIndex(index !== 5 ? index+1 : 0)
        }
    } 
  return (
    <div className={styles.container}>
    <div className={styles.heroeSection}>
      <h1 className={styles.hotelname}>  AfriFooHub </h1>
      <p className={styles.brandDesc}> Have your meal at <span className={styles.brand}> AfriFooHUb </span> and stay shredded all year round . At <span className={styles.brand}>AfriFooHub</span> we prepare the most healthy dishes , no seed oils and processed ingredients but with the most natural products from our own <span className={styles.brand}> AfriG </span>  Farm in LImuru . </p>
    </div>
    <div className={styles.ads}>
     {/* <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
      <Image src="/img/arrowl.png" alt="" fill  style={{objectFit:"contain"}}/>
     </div> */}
    <div className={styles.wrapper} style={{transform:`translateX(${-100 *index}vw)`}}>
      {images.map((img, i) => (
        <div className={styles.imgContainer} key={i}>
          <Image src={img} alt="" fill  style={{objectFit:"cover"}} />
        </div>
      ))}
    </div>
    {/* <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
      <Image src="/img/arrowr.png" fill alt="" style={{objectFit:"contain"}}/>
    </div> */}
    </div>
    
  </div>
  )
}

export default Featured
