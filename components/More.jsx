import React from 'react'
import Link from 'next/link'
import styles from '../styles/More.module.css'
function More() {
  return (
    <div className={styles.mainButton}><Link href={'/product/all'}>View More...</Link></div>
  )
}

export default More
