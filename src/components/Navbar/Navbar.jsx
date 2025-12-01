import { jsxDEV } from 'react/jsx-dev-runtime';
import React, {useState} from 'react';
import styles from '../Navbar/Navbar.module.css'
import Image from "../../assets/nav/hamburger.png"
import Close from "../../assets/nav/closeIcon.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen?Close: Image} alt="menu-button"
         onClick={() => setMenuOpen(!menuOpen)}/> 
        <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects"> Project</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
