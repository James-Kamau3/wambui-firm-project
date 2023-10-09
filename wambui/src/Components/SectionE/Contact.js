import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './about.css'


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ks5lazk', 'template_1hv758r', form.current, 'dF_8QpOSyn4G4bFSv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const notify = () => toast('Sent!')

  
  return (
    <div className='a'>
    <h1 className='heading-one'>Contact Us</h1>
    <Styling>
    <form ref={form} onSubmit={sendEmail}>
      <label>NAME</label>
      <input type="text" name="user_name" required />
      <label>PHONE NUMBER</label>
      <input type="tel" name="user_number" required/>
      <label>YOUR EMAIL</label>
      <input type="email" name="user_email" required/>
      <label>MESSAGE</label>
      <textarea name="message" />
      <input type="submit" onClick={notify} value="Send" />
      <ToastContainer
      position="top-right"
      autoClose={600}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />
    </form>
    </Styling>
    </div>
  );
};

export default Contact;


const Styling = styled.div`
  width: 100%; /* Set the width of the container to 100% */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */

  form {
    display: flex;
    flex-direction: column;
    // width: 100%;
    font-size: 1rem;
    width: 30rem;
    padding: 1rem;


    input {
      width: 100%;
      height: 2rem;
      padding: 1rem;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 10rem;
      min-height: 10rem;
      padding: 1rem;
      outline: none;
      border-radius: 1rem;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 1px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      padding-bottom: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;