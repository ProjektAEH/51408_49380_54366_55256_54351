import React, { useState } from 'react';
import '../CSS/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

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

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    if (password !== confirmPassword) {
      setError('Hasła nie pasują do siebie.');
    } else if (password.length < 8) {
      setError('Hasło musi mieć co najmniej 8 znaków.');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Pomyślnie zarejestrowano
          console.log('Pomyślnie zarejestrowano!');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setError('');
          navigate('/login');
        })
        .catch((error) => {
          // Rejestracja nieudana
          setError(error.message);
        });
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <h1>Zarejestruj się</h1>
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
        <div className="form-group">
          <label>Potwierdź hasło:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Zarejestruj się
        </button>
        <p>Posiadasz już konto? <Link to="/login">Zaloguj się</Link></p>
      </form>
    </div>
  );
};

export default Signup;
