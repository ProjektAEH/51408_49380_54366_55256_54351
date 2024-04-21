import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // import the necessary auth functions
import '../CSS/Order.css';

const firebaseConfig = {
  apiKey: "AIzaSyDBaQNblsikvNXFNOcPWe18df4zPGIrdrA",
  authDomain: "swpssm2.firebaseapp.com",
  databaseURL: "https://swpssm2-default-rtdb.firebaseio.com",
  projectId: "swpssm2",
  storageBucket: "swpssm2.appspot.com",
  messagingSenderId: "405521605660",
  appId: "1:405521605660:web:9a46fed1961ac9507aebd9",
  measurementId: "G-P1M7J04B00"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const ordersRef = collection(db, 'zglos');
const auth = getAuth(); // initialize the auth service

const Order = ({ setOrders }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [device, setDevice] = useState('');
  const [issue, setIssue] = useState('');

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email); 
      }
    });
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = { name, email, phone, device, issue };
    await addDoc(ordersRef, order);
    setName('');
    setEmail('');
    setPhone('');
    setDevice('');
    setIssue('');
    dateSubmitted("");
  };

  return (
    <div className="order">
      <form onSubmit={handleSubmit}>
      <h1 className="title">Zgłoś usterkę</h1>
        <label className="label">Imię i nazwisko</label>
        <input
          className="input"
          type="text"
          placeholder="Twoje imię i nazwisko"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="label">Adres e-mail</label>
        <input
          className="input"
          type="email"
          placeholder="Twój adres e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="label">Numer telefonu</label>
        <input
          className="input"
          type="tel"
          placeholder="Twój numer telefonu"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label className="label">Urządzenie</label>
        <input
          className="input"
          type="tel"
          placeholder="Twoje urządzenie"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          required
        />
        <label className="label">Opis usterki</label>
        <textarea
          className="textarea"
          placeholder="Opis usterki"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        ></textarea>
        <button className="button" type="submit">
          Wyślij zgłoszenie
        </button>
        <label className="label">Prosimy o przesłanie urządzenia, <br></br>na adres podany w stopce</label>
      </form>
    </div>
  );
};

export default Order;
