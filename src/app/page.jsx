import React from 'react';
import Image from 'next/image';
import styles from "./page.module.css";
import Hero from "../../public/hero.png"
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Empowering Women to Lead and Innovate in Business</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We believe in the power of collaboration and are committed to helping women achieve their business dreams.</p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="home image" className={styles.img}/> 
      </div>
    </div>
  )
}
