import React from 'react';
import '../styles/Contact.css'
import bkImg from '../assets/pizzaLeft.jpg'
import {useRef} from 'react';
function Contact(){
  let inputName=useRef();
  let inputEmail=useRef();
  let inputMsg=useRef();

  function SubmitHandler(event){
    event.preventDefault();
    let nameEntered = inputName.current.value;
    let mailEntered = inputEmail.current.value;
    let msgEntered = inputMsg.current.value;
    console.log(nameEntered , mailEntered , msgEntered);

  }
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${bkImg})`}}>
      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form onSubmit={SubmitHandler}>
          <label> Name:</label>
          <input type='text' required placeholder='FullName' ref={inputName}/>
          <label> Email:</label>
          <input type='email' required placeholder='mail@example.com' ref={inputEmail}/>
          <textarea row='3' required placeholder='Your Msg...' ref={inputMsg}/>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>

  );
}

export default Contact;