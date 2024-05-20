import React, {useState} from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

        <a className={styles.title} href="/"><img src={getImageUrl("nav/LogoHopeSemFundo.png")} alt="logo" /></a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen 
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
            }  
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#contact">Contacte-nos</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar