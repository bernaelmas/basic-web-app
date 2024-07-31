import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}></p>
          <div className={styles.author}>
            <Image
            src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
            />
            <span className={styles.username}>Jhon Don</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
          src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill={true}
          className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}></p>
      </div>
    </div>
  )
}

export default BlogPost