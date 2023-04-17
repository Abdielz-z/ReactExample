import React from 'react';
import styles from '../styles/Sidebar.module.css'
import image from '../images/Auto.jpg'

const Sidebar = () => {
  return (
    <div className={styles.sidebarcontainer}>
      <img src={image} className={styles.sidebarimage}/>
      <ul className={styles.sidebarmenu}>
        <li className={styles.sidebarmenuitem}>Home</li>
        <li className={styles.sidebarmenuitem}>AuoZone Option 1</li>
        <li className={styles.sidebarmenuitem}>AuoZone Option 2</li>
      </ul>
    </div>
  );
};

export default Sidebar;