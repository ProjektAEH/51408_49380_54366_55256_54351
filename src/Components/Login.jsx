import React, { useState } from 'react';
import '../CSS/Login.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Signup from './Signup';

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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logowanie udane
        console.log('Logowanie udane!');
        setEmail('');
        setPassword('');
        setError('');
      })
      .catch((error) => {
        // Logowanie nieudane
        setError('Nieprawidłowy email lub hasło.');
      });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <div className="login">
            <form onSubmit={handleLogin}>
              <h1>Zaloguj się</h1>
              {error && <div className="error">{error}</div>}
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Hasło:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn">
                Zaloguj się
              </button>
              <Link to="/signup">
                <button className="button">Zarejestruj się</button>
              </Link>
            </form>
          </div>
        } />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Login;
