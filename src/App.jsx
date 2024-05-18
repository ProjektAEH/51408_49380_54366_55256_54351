import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Order, Contacts, Services, Footer, Navbar, Reports, Hero, Login, Signup, Status, Faq, Review } from './components';
import './CSS/index.css';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/order" element={<Order />} />
          <Route path="/status" element={<Status />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
