import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contactos
            </h2>
            <p>
                Sinta-se à vontade para entrar em contato!
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:ckts1@hotmail.com">ckts1@hotmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/instaIcon.png")} alt="Instagram Icon" />
                <a href="https://www.instagram.com/myname">instagram.com/myname</a>
            </li>
            <li className={styles.link}> 
            <img src={getImageUrl("contact/faceIcon.png")} alt="Facebook Icon" />
                <a href="https://www.facebook.com/myname">facebook.com/myname</a>
            </li>
        </ul>
    </footer>
  )
}
