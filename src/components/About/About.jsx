import React from 'react'
import styles from '../About/About.module.css'
import about from '../../assets/hero/working.png'
import cursor from '../../assets/about/cursorIcon.png'
import server from '../../assets/about/serverIcon.png'
import ui from '../../assets/about/uiIcon.png'
export default function () {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={about} alt="Working" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="arrow" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p> Experience with React, HTML, CSS </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={server} alt="server" />
            <div className={styles.aboutItemText}>
              <h3> Database</h3>
              <p> Basic knowledge of databases </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={ui} alt="ui" />
            <div className={styles.aboutItemText}>
              <h3>Fresh Graduate</h3>
              <p> Recently graduated and eager to learn </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
