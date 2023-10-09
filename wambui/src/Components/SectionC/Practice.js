import React, { useEffect, useState } from 'react'
import './Prac.css'

function Practice() {
  const [practice, setPractice] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/James-Kamau3/Wambui-practices/db')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.practice)) {
          setPractice(data.practice);
        } else {
          console.error('Data retrieved is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className='head'>
        <h1>Our Practice Areas</h1>
      </div>
      <div className='services-container'>
        {practice.map(prac => (
          <div className='service-card' key={prac.id}>
            <img className='service-image' src={prac.image_url} alt={prac.name} />
            <h3 className='des'>{prac.name}</h3>
            <p className='desc'>{prac.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;
