import React from 'react';
import '../stylesheet/contactus/contactus.css'; // Import CSS file

function Contactus() {
  return (
    <main>
      <section className="intro">
        <h4>TALK TO US AND</h4>
        <h2>WE CAN <span>BUILD YOUR DREAM HOME</span> AROUND YOU</h2>
        <h4>Home .... Contact-Us below</h4>
      </section>

      <section className="intro1">
        <h2>HOW CAN WE HELP</h2>
        <ul>
          <li>Do you have a general question about construction?</li>
          <li>Do you have any upcoming projects you'd like to discuss?</li>
          <li>Are you a subcontractor and would love to partner with buildAhome?</li>
          <li>Are you enquiring about careers at SwaraInfra?</li>
        </ul>
      </section>
      <section className="contact">
        <h4>Contact-Us</h4>
        <div className="contact-methods">
          <div className="email">
            <p id="first">Email-Us :</p>
            <p id="next">swarainfra1@gmail.com</p>
          </div>
          <div className="call-us">
            <p id="first">Call-Us :</p>
            <p id="next">+91 9538675322</p>
            <p id="next">+91 9902718498</p>
          </div>
        </div>
      </section>

      <div className="head2">
        <h2>WHERE TO FIND US</h2>
      </div>

      <section id="location-images">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.6396172426017!2d75.11453665467444!3d15.355479937451365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d729e11eaac5%3A0x5188820b2489475!2sRidhi%20sidhi%20glass%20hubali!5e0!3m2!1sen!2sin!4v1717178014933!5m2!1sen!2sin"
            width="500" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy"
          ></iframe>
          <p>Hubballi Office:<br />
          Shop No 17, second floor , Ridhi Sidhi complex opp, Giants School Akshay park , Gokul Road Hubballi </p>
        </div>
      </section>
    </main>
  );
}

export default Contactus;