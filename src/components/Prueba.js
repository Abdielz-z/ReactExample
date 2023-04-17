import React, { useState } from 'react';
import styles from '../styles/Prueba.module.css';

const Prueba = () => {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = () => {
    setLoading(true);
    setError('');

    // Fetch data from API
    fetch('http://localhost:8080/dynatrace-data') // Cambiar la URL a la de tu API de Spring Boot
      .then(response => response.json())
      .then(jsonData => {
        setData(JSON.stringify(jsonData)); // Convertir el JSON en texto y guardar en el estado
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data from API');
        setLoading(false);
      });
  };

  const sendData = () => {
    // Send data to another API for storing in database
    fetch('http://localhost:8080/dynatrace-data', {
      method: 'POST',
      body: JSON.stringify(JSON.parse(data)), // Parse the data from string to JSON
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log('Data sent successfully:', result);
      })
      .catch(error => {
        console.error('Error sending data to API:', error);
      });
  };

  return (
    <div>
      <input type="text" value={data} readOnly className={styles.field} />
      <button onClick={fetchData} disabled={isLoading} className={styles.buttons}>
        {isLoading ? 'Loading...' : 'Get Data'}
      </button>

      <button onClick={sendData} disabled={!data} className={styles.buttons}>
        Send Data
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Prueba;