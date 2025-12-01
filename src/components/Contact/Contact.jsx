import React from 'react'
import styles from '../Contact/Contact.module.css'
import email from '../../../public/contact/emailIcon.png'
import github from '../../../public/contact/githubIcon.png'
export default function Contact() {
  return (
    <footer  id="contact" className={styles.container}>
      <div  className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="emailIcon" />
          <a href="mailto:gnualdagrey@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="emailIcon" />
          <a href="mailto:gnualdagrey@gmail.com">Github</a>
        </li>
      </ul>
    </footer>
  )
}
