import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" 
        fill={true}
        alt=""
        className={styles.img} 
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          We are a dynamic community dedicated to supporting and empowering women entrepreneurs. 
          Our organization was founded with the belief that women have unique talents and perspectives 
          that are invaluable in the business world. We strive to create an inclusive environment where women can thrive, 
          innovate, and lead.By offering a range of resources, including mentorship, training, and networking opportunities,
          we aim to break down barriers and open doors for women from all walks of life.
          <br/>
          <br/>
          Our goal is to foster a culture of collaboration and growth, 
          helping women realize their full potential and achieve their professional aspirations.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          We provide comprehensive support to women entrepreneurs at every stage of their journey. 
          Our services include personalized mentorship, educational programs, and financial support.
          We also organize networking events that connect women entrepreneurs with investors and industry experts.
          Our goals are:
          <br/>
          <br/>
            1-To equip women with the skills and knowledge needed to succeed in business.
            <br/>
            2-To provide financial resources and access to funding opportunities.
            <br/>
            3-To foster a supportive community that encourages collaboration and growth.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About