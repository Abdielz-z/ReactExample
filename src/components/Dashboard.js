import React from 'react';
import styles from '../styles/CenteredComponent.module.css';
import Prueba from './Prueba';

const CenteredComponent = () => {
  return (
    <div className={styles.centeredcontainer}>
      <div className={styles.centeredcontent}>
        <Prueba />
      </div>
    </div>
  );
};

export default CenteredComponent;