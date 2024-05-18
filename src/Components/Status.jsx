import React, { useState, useEffect } from 'react';
import { collection, getDocs,  } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import '../CSS/Status.css';

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
const auth = getAuth(app);

const Status = () => {
  const [status, setStatus] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      const statusCollection = collection(db, 'zglos');
      const statusSnapshot = await getDocs(statusCollection);
      const statusData = statusSnapshot.docs.map(doc => doc.data());
      setStatus(statusData);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    fetchStatus();

    return unsubscribe;
  }, [auth, db]);

  return (
    <div className="Status">
      <h1 className="title">Twoje Zgłoszenia</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Imię i Nazwisko</th>
            <th>Telefon</th>
            <th>E-mail</th>
            <th>Urządzenie</th>
            <th>Status usługi</th>     
          </tr>
        </thead>
        <tbody>
          {status.map(report => {
            if (report.email === userEmail) {
              return (
                <tr key={report.id}>
                  <td>{report.name}</td>
                  <td>{report.phone}</td>
                  <td>{report.email}</td>
                  <td>{report.device}</td>      
                  <td>{report.stats}</td>                          
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Status;