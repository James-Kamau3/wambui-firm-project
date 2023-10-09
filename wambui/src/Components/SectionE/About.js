import React, { useState, useEffect } from "react";
import './about.css';
import craftImage from '../../Images/craft.jpeg';

function About() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define a scroll threshold at which the words should appear
      const threshold = 300;

      // Update visibility based on scroll position
      setIsVisible(scrollY > threshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

  return ( 
    <div className="s">
    <div className='about_header'>
      <h1>About Us</h1>
    </div>
    <div className='about-container'>
      <div className='paragraph'>
        <p>
          Is an Advocate of the High Court of Kenya<br />
          with over 4 years of experience in Litigation.<br />
          Currently, she is the managing partner at <br />
          Wambui K. Advocates, a boutique law firm with<br />
          offices in Nairobi and Nakuru.<br />
        </p>
        <br />
        <p>
          Ruth is a skilled negotiator having settled multiple<br />
          disputes out of court to the satisfaction of all the <br />
          parties.
        </p>
        <br />
        <p>
          She is committed to handling matters with integrity,  <br />
          passion and with constant communication with <br />
          the clients.
        </p>
      </div>

      <div  >
        <img  className='law_img' src={craftImage} alt='law' />
      </div>
    </div>

    <div className={`scrolling-words ${isVisible ? 'visible' : ''}`}
>
      <h2 className='heading-two'>Our Vision</h2>
      {/* <img src='Images/icons8-vision.gif' alt='vision'/> */}
      <div className='paragraph-vision'>
      <p>
      Our vision is to be the premier legal firm in Kenya, recognized for our unwavering <br/>
      commitment to justice, excellence in legal services, and our dedication to making a positive <br/>
      impact on our clients, society, and the legal profession as a whole.
      </p>
      </div>

      <div className={`scrolling-words ${isVisible ? 'visible' : ''}`}
>
      <h2 className='heading-two'>Why choose us</h2>
      <div className='paragraph-why-us'>
      <p>
      At Wambui K. Advocates, our mission is to provide exceptional legal representation and counsel <br/>
      to our clients, fostering trust and building lasting relationships. We are dedicated to <br/>
      upholding the principles of justice, integrity, and ethics in all our endeavors. Through our <br/>
      expertise, innovation, and community engagement, we aim to contribute to the growth and <br/>
      development of Kenya's legal landscape while making a meaningful difference in the lives of <br/>
      those we serve.
      </p>
      </div>
    </div>
    </div>
    </div>
    
  );
}

export default About;
