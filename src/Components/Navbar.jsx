import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import '../CSS/navbar.css';

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
const auth = getAuth(app);

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      navigate('/');
    });
  };

  const navLinks = [
    { id: 'home', title: 'Strona Główna' },
    { id: 'services', title: 'Usługi' },
    user?.email === 'admin@admin.com' && { id: 'reports', title: 'Zgłoszenia' },
    user && user.email !== 'admin@admin.com' && { id: 'Order', title: 'Zamów Usługę' },
    user && user.email !== 'admin@admin.com' && { id: 'Status', title: 'Status Usługi' },
    { id: 'contacts', title: 'Kontakt' },
    !user && { id: 'login', title: 'Zaloguj' },
  ].filter(Boolean);

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        <span className="brand-name__first-letter">S</span>
        <span className="brand-name__other-letters">WPSUM</span>
      </Link>
      <div className="navigation-menu">
        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/${id}`}>{title}</Link>
            </li>
          ))}
          {user && (
              <button className="button" onClick={handleLogout}>Wyloguj</button>
            )}
        </ul>
      </div>
    </nav>
  );
}


