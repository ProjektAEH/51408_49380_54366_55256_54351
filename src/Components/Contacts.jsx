import React from 'react';
import '../CSS/Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts">
      <h1 className="title">Kontakt</h1>
      <p className="subtitle">Skontaktuj się z nami w razie problemów z Twoim urządzeniem mobilnym.</p>
        <ul className="subtitle">
        <li className="subtitle">Telefon: 123-456-789</li>
        <li className="subtitle">E-mail: kontakt@serwis-mobilny.pl</li>
        <li className="subtitle">Adres: ul. Józefa Lewartowskiego 17, 00-169 Warszawa</li>
      </ul>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.615903009474!2d20.9960985158385!3d52.21519257975667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecf87af0e70d1%3A0x92b2cd0b3bb38f51!2sJ%C3%B3zefa%20Lewartowskiego%2017%2C%2000-169%20Warszawa!5e0!3m2!1sen!2spl!4v1651907918196!5m2!1sen!2spl" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;